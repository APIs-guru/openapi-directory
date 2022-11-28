import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum {
    SchemaChangeUnspecified = "SCHEMA_CHANGE_UNSPECIFIED",
    Incompatible = "INCOMPATIBLE",
    Modified = "MODIFIED"
}
/**
 * Action details for incompatible schemas detected by discovery.
**/
export declare class GoogleCloudDataplexV1ActionIncompatibleDataSchema extends SpeakeasyBase {
    existingSchema?: string;
    newSchema?: string;
    sampledDataLocations?: string[];
    schemaChange?: GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum;
    table?: string;
}
