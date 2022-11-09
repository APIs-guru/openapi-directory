import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { MessageCode404PiisEnum } from "./messagecode404piisenum";
import { MessageCode404PiisEnum } from "./messagecode404piisenum";


// Error404PiisAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error404PiisAdditionalErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: MessageCode404PiisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// Error404Piis
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for PIIS.
 * 
**/
export class Error404Piis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=additionalErrors", elemType: shared.Error404PiisAdditionalErrors })
  additionalErrors?: Error404PiisAdditionalErrors[];

  @Metadata({ data: "json, name=code" })
  code: MessageCode404PiisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
