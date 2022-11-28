import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AttributeDefinitionCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Resource = "RESOURCE",
    Request = "REQUEST"
}


// AttributeDefinition
/** 
 * A client-defined consent attribute.
**/
export class AttributeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedValues" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: AttributeDefinitionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=consentDefaultValues" })
  consentDefaultValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=dataMappingDefaultValue" })
  dataMappingDefaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
