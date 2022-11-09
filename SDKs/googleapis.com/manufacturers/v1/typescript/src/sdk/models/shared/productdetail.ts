import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductDetail
/** 
 * A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
**/
export class ProductDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=attributeValue" })
  attributeValue?: string;

  @Metadata({ data: "json, name=sectionName" })
  sectionName?: string;
}
