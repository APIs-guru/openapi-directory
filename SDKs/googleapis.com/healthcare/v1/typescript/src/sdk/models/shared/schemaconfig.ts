import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SchemaConfigSchemaTypeEnum {
    SchemaTypeUnspecified = "SCHEMA_TYPE_UNSPECIFIED"
,    Analytics = "ANALYTICS"
,    AnalyticsV2 = "ANALYTICS_V2"
}


// SchemaConfig
/** 
 * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
**/
export class SchemaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=recursiveStructureDepth" })
  recursiveStructureDepth?: string;

  @Metadata({ data: "json, name=schemaType" })
  schemaType?: SchemaConfigSchemaTypeEnum;
}
