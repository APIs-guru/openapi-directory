import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductProductDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=attributeValue" })
  attributeValue?: string;

  @Metadata({ data: "json, name=sectionName" })
  sectionName?: string;
}
