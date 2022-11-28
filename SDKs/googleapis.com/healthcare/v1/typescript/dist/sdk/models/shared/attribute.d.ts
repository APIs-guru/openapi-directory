import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.
**/
export declare class Attribute extends SpeakeasyBase {
    attributeDefinitionId?: string;
    values?: string[];
}
