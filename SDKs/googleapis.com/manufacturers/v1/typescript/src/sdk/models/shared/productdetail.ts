import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductDetail
/** 
 * A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
**/
export class ProductDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeValue" })
  attributeValue?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionName" })
  sectionName?: string;
}
