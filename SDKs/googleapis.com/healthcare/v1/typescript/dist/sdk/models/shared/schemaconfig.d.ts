import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SchemaConfigSchemaTypeEnum {
    SchemaTypeUnspecified = "SCHEMA_TYPE_UNSPECIFIED",
    Analytics = "ANALYTICS",
    AnalyticsV2 = "ANALYTICS_V2"
}
/**
 * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
**/
export declare class SchemaConfig extends SpeakeasyBase {
    recursiveStructureDepth?: string;
    schemaType?: SchemaConfigSchemaTypeEnum;
}
