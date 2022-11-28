import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BigQueryConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND",
    SchemaMismatch = "SCHEMA_MISMATCH"
}
/**
 * Configuration for a BigQuery subscription.
**/
export declare class BigQueryConfig extends SpeakeasyBase {
    dropUnknownFields?: boolean;
    state?: BigQueryConfigStateEnum;
    table?: string;
    useTopicSchema?: boolean;
    writeMetadata?: boolean;
}
