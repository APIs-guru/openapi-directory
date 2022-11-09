import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { MessageCode404AisEnum } from "./messagecode404aisenum";
import { MessageCode404AisEnum } from "./messagecode404aisenum";


// Error404AisAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error404AisAdditionalErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: MessageCode404AisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// Error404Ais
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for AIS.
 * 
**/
export class Error404Ais extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=additionalErrors", elemType: shared.Error404AisAdditionalErrors })
  additionalErrors?: Error404AisAdditionalErrors[];

  @Metadata({ data: "json, name=code" })
  code: MessageCode404AisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
