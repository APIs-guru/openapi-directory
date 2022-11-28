import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode404PisEnum } from "./messagecode404pisenum";



// Error404PisAdditionalErrors
/** 
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export class Error404PisAdditionalErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode404PisEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Error404Pis
/** 
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for PIS.
 * 
**/
export class Error404Pis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error404PisAdditionalErrors })
  additionalErrors?: Error404PisAdditionalErrors[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode404PisEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
