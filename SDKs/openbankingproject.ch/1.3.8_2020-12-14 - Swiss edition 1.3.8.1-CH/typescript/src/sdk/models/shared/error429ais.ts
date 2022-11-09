import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { MessageCode429AisEnum } from "./messagecode429aisenum";
import { MessageCode429AisEnum } from "./messagecode429aisenum";


// Error429AisAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807]
 * in case of a HTTP error code 429 for.
 * 
**/
export class Error429AisAdditionalErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: MessageCode429AisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// Error429Ais
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 429 for AIS.
 * 
**/
export class Error429Ais extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=additionalErrors", elemType: shared.Error429AisAdditionalErrors })
  additionalErrors?: Error429AisAdditionalErrors[];

  @Metadata({ data: "json, name=code" })
  code: MessageCode429AisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
