import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attribute
/** 
 * An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.
**/
export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeDefinitionId" })
  attributeDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
