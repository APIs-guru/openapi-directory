import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { MessageCode403AisEnum } from "./messagecode403aisenum";
import { MessageCode403AisEnum } from "./messagecode403aisenum";


// Error403AisAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error403AisAdditionalErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: MessageCode403AisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// Error403Ais
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for AIS.
 * 
**/
export class Error403Ais extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=additionalErrors", elemType: shared.Error403AisAdditionalErrors })
  additionalErrors?: Error403AisAdditionalErrors[];

  @Metadata({ data: "json, name=code" })
  code: MessageCode403AisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
