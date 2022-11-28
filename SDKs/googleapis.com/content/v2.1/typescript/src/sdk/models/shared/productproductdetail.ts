import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductProductDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeValue" })
  attributeValue?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionName" })
  sectionName?: string;
}
