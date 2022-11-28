import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePartitioning } from "./timepartitioning";


export enum SchemaConfigSchemaTypeEnum {
    SchemaTypeUnspecified = "SCHEMA_TYPE_UNSPECIFIED",
    Lossless = "LOSSLESS",
    Analytics = "ANALYTICS",
    AnalyticsV2 = "ANALYTICS_V2"
}


// SchemaConfig
/** 
 * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
**/
export class SchemaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdatedPartitionConfig" })
  lastUpdatedPartitionConfig?: TimePartitioning;

  @SpeakeasyMetadata({ data: "json, name=recursiveStructureDepth" })
  recursiveStructureDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaType" })
  schemaType?: SchemaConfigSchemaTypeEnum;
}
