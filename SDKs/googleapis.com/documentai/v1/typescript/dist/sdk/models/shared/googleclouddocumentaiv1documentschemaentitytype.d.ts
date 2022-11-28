import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1documentschemaentitytypeproperty";
/**
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
**/
export declare class GoogleCloudDocumentaiV1DocumentSchemaEntityType extends SpeakeasyBase {
    baseTypes?: string[];
    displayName?: string;
    enumValues?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues;
    name?: string;
    properties?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty[];
}
