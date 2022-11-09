import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LiveStreamConfigurationIssue } from "./livestreamconfigurationissue";

export enum LiveStreamHealthStatusStatusEnum {
    Good = "good"
,    Ok = "ok"
,    Bad = "bad"
,    NoData = "noData"
,    Revoked = "revoked"
}


export class LiveStreamHealthStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationIssues", elemType: shared.LiveStreamConfigurationIssue })
  configurationIssues?: LiveStreamConfigurationIssue[];

  @Metadata({ data: "json, name=lastUpdateTimeSeconds" })
  lastUpdateTimeSeconds?: string;

  @Metadata({ data: "json, name=status" })
  status?: LiveStreamHealthStatusStatusEnum;
}
