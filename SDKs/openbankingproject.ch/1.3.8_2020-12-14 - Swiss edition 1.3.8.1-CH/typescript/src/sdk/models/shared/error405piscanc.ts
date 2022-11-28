import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode405PisCancEnum } from "./messagecode405piscancenum";



// Error405PisCancAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error405PisCancAdditionalErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode405PisCancEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Error405PisCanc
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for a pament cancelation (PIS).
 * 
**/
export class Error405PisCanc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error405PisCancAdditionalErrors })
  additionalErrors?: Error405PisCancAdditionalErrors[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode405PisCancEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
