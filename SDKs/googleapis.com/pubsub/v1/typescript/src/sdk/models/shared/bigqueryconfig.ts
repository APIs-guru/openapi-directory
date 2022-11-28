import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BigQueryConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND",
    SchemaMismatch = "SCHEMA_MISMATCH"
}


// BigQueryConfig
/** 
 * Configuration for a BigQuery subscription.
**/
export class BigQueryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dropUnknownFields" })
  dropUnknownFields?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BigQueryConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=useTopicSchema" })
  useTopicSchema?: boolean;

  @SpeakeasyMetadata({ data: "json, name=writeMetadata" })
  writeMetadata?: boolean;
}
