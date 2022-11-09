import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BigQueryConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    PermissionDenied = "PERMISSION_DENIED"
,    NotFound = "NOT_FOUND"
,    SchemaMismatch = "SCHEMA_MISMATCH"
}


// BigQueryConfig
/** 
 * Configuration for a BigQuery subscription.
**/
export class BigQueryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dropUnknownFields" })
  dropUnknownFields?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: BigQueryConfigStateEnum;

  @Metadata({ data: "json, name=table" })
  table?: string;

  @Metadata({ data: "json, name=useTopicSchema" })
  useTopicSchema?: boolean;

  @Metadata({ data: "json, name=writeMetadata" })
  writeMetadata?: boolean;
}
