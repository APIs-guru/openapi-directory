import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum {
    SchemaChangeUnspecified = "SCHEMA_CHANGE_UNSPECIFIED"
,    Incompatible = "INCOMPATIBLE"
,    Modified = "MODIFIED"
}


// GoogleCloudDataplexV1ActionIncompatibleDataSchema
/** 
 * Action details for incompatible schemas detected by discovery.
**/
export class GoogleCloudDataplexV1ActionIncompatibleDataSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=existingSchema" })
  existingSchema?: string;

  @Metadata({ data: "json, name=newSchema" })
  newSchema?: string;

  @Metadata({ data: "json, name=sampledDataLocations" })
  sampledDataLocations?: string[];

  @Metadata({ data: "json, name=schemaChange" })
  schemaChange?: GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
