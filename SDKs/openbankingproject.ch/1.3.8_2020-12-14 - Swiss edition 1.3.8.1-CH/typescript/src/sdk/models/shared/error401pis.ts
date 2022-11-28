import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode401PisEnum } from "./messagecode401pisenum";



// Error401PisAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error401PisAdditionalErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode401PisEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Error401Pis
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 401 for PIS.
 * 
**/
export class Error401Pis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error401PisAdditionalErrors })
  additionalErrors?: Error401PisAdditionalErrors[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode401PisEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
