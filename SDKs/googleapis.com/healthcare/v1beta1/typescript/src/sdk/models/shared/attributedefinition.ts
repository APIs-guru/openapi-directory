import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AttributeDefinitionCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED"
,    Resource = "RESOURCE"
,    Request = "REQUEST"
}


// AttributeDefinition
/** 
 * A client-defined consent attribute.
**/
export class AttributeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedValues" })
  allowedValues?: string[];

  @Metadata({ data: "json, name=category" })
  category?: AttributeDefinitionCategoryEnum;

  @Metadata({ data: "json, name=consentDefaultValues" })
  consentDefaultValues?: string[];

  @Metadata({ data: "json, name=dataMappingDefaultValue" })
  dataMappingDefaultValue?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
