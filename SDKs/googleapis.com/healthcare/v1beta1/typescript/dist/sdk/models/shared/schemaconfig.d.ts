import { SpeakeasyBase } from "../../../internal/utils";
import { TimePartitioning } from "./timepartitioning";
export declare enum SchemaConfigSchemaTypeEnum {
    SchemaTypeUnspecified = "SCHEMA_TYPE_UNSPECIFIED",
    Lossless = "LOSSLESS",
    Analytics = "ANALYTICS",
    AnalyticsV2 = "ANALYTICS_V2"
}
/**
 * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
**/
export declare class SchemaConfig extends SpeakeasyBase {
    lastUpdatedPartitionConfig?: TimePartitioning;
    recursiveStructureDepth?: string;
    schemaType?: SchemaConfigSchemaTypeEnum;
}
