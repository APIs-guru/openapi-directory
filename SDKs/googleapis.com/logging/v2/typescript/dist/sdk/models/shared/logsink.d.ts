import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryOptionsInput } from "./bigqueryoptions";
import { LogExclusionInput } from "./logexclusion";
import { BigQueryOptions } from "./bigqueryoptions";
import { LogExclusion } from "./logexclusion";
export declare enum LogSinkOutputVersionFormatEnum {
    VersionFormatUnspecified = "VERSION_FORMAT_UNSPECIFIED",
    V2 = "V2",
    V1 = "V1"
}
/**
 * Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
**/
export declare class LogSinkInput extends SpeakeasyBase {
    bigqueryOptions?: BigQueryOptionsInput;
    description?: string;
    destination?: string;
    disabled?: boolean;
    exclusions?: LogExclusionInput[];
    filter?: string;
    includeChildren?: boolean;
    name?: string;
    outputVersionFormat?: LogSinkOutputVersionFormatEnum;
}
/**
 * Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
**/
export declare class LogSink extends SpeakeasyBase {
    bigqueryOptions?: BigQueryOptions;
    createTime?: string;
    description?: string;
    destination?: string;
    disabled?: boolean;
    exclusions?: LogExclusion[];
    filter?: string;
    includeChildren?: boolean;
    name?: string;
    outputVersionFormat?: LogSinkOutputVersionFormatEnum;
    updateTime?: string;
    writerIdentity?: string;
}
