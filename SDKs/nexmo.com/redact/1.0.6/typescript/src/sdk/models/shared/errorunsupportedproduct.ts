import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorUnsupportedProduct
/** 
 * Unsupported Product
**/
export class ErrorUnsupportedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
