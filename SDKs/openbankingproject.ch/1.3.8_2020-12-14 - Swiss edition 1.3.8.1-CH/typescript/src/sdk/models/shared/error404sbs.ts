import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode404SbsEnum } from "./messagecode404sbsenum";



// Error404SbsAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error404SbsAdditionalErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode404SbsEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Error404Sbs
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for signing baskets.
 * 
**/
export class Error404Sbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error404SbsAdditionalErrors })
  additionalErrors?: Error404SbsAdditionalErrors[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode404SbsEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
