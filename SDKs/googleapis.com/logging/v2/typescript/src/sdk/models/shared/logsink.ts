import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryOptionsInput } from "./bigqueryoptions";
import { LogExclusionInput } from "./logexclusion";
import { BigQueryOptions } from "./bigqueryoptions";
import { LogExclusion } from "./logexclusion";


export enum LogSinkOutputVersionFormatEnum {
    VersionFormatUnspecified = "VERSION_FORMAT_UNSPECIFIED",
    V2 = "V2",
    V1 = "V1"
}


// LogSinkInput
/** 
 * Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
**/
export class LogSinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryOptions" })
  bigqueryOptions?: BigQueryOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exclusions", elemType: LogExclusionInput })
  exclusions?: LogExclusionInput[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=includeChildren" })
  includeChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputVersionFormat" })
  outputVersionFormat?: LogSinkOutputVersionFormatEnum;
}


// LogSink
/** 
 * Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
**/
export class LogSink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryOptions" })
  bigqueryOptions?: BigQueryOptions;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exclusions", elemType: LogExclusion })
  exclusions?: LogExclusion[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=includeChildren" })
  includeChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputVersionFormat" })
  outputVersionFormat?: LogSinkOutputVersionFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=writerIdentity" })
  writerIdentity?: string;
}
