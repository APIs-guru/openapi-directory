import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1beta3documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1beta3documentschemaentitytypeproperty";
/**
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType extends SpeakeasyBase {
    baseTypes?: string[];
    displayName?: string;
    enumValues?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues;
    name?: string;
    properties?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty[];
}
