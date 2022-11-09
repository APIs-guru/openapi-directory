import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigQueryOptions } from "./bigqueryoptions";
import { LogExclusion } from "./logexclusion";

export enum LogSinkOutputVersionFormatEnum {
    VersionFormatUnspecified = "VERSION_FORMAT_UNSPECIFIED"
,    V2 = "V2"
,    V1 = "V1"
}


// LogSink
/** 
 * Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
**/
export class LogSink extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryOptions" })
  bigqueryOptions?: BigQueryOptions;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=exclusions", elemType: shared.LogExclusion })
  exclusions?: LogExclusion[];

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=includeChildren" })
  includeChildren?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputVersionFormat" })
  outputVersionFormat?: LogSinkOutputVersionFormatEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=writerIdentity" })
  writerIdentity?: string;
}
