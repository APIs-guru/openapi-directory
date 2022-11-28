import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum {
    SchemaChangeUnspecified = "SCHEMA_CHANGE_UNSPECIFIED",
    Incompatible = "INCOMPATIBLE",
    Modified = "MODIFIED"
}


// GoogleCloudDataplexV1ActionIncompatibleDataSchema
/** 
 * Action details for incompatible schemas detected by discovery.
**/
export class GoogleCloudDataplexV1ActionIncompatibleDataSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=existingSchema" })
  existingSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=newSchema" })
  newSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=sampledDataLocations" })
  sampledDataLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=schemaChange" })
  schemaChange?: GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
