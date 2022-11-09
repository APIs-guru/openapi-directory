import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { MessageCode403PiisEnum } from "./messagecode403piisenum";
import { MessageCode403PiisEnum } from "./messagecode403piisenum";


// Error403PiisAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error403PiisAdditionalErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: MessageCode403PiisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// Error403Piis
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for PIIS.
 * 
**/
export class Error403Piis extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=additionalErrors", elemType: shared.Error403PiisAdditionalErrors })
  additionalErrors?: Error403PiisAdditionalErrors[];

  @Metadata({ data: "json, name=code" })
  code: MessageCode403PiisEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
