import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { MessageCode405PisCancEnum } from "./messagecode405piscancenum";
import { MessageCode405PisCancEnum } from "./messagecode405piscancenum";


// Error405PisCancAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error405PisCancAdditionalErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: MessageCode405PisCancEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// Error405PisCanc
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for a pament cancelation (PIS).
 * 
**/
export class Error405PisCanc extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=additionalErrors", elemType: shared.Error405PisCancAdditionalErrors })
  additionalErrors?: Error405PisCancAdditionalErrors[];

  @Metadata({ data: "json, name=code" })
  code: MessageCode405PisCancEnum;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
