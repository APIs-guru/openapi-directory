import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode403SbsEnum } from "./messagecode403sbsenum";



// Error403SbsAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error403SbsAdditionalErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode403SbsEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Error403Sbs
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for signing baskets.
 * 
**/
export class Error403Sbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error403SbsAdditionalErrors })
  additionalErrors?: Error403SbsAdditionalErrors[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode403SbsEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
