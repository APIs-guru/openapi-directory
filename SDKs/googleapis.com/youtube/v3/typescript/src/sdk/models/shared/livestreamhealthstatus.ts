import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamConfigurationIssue } from "./livestreamconfigurationissue";


export enum LiveStreamHealthStatusStatusEnum {
    Good = "good",
    Ok = "ok",
    Bad = "bad",
    NoData = "noData",
    Revoked = "revoked"
}


export class LiveStreamHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationIssues", elemType: LiveStreamConfigurationIssue })
  configurationIssues?: LiveStreamConfigurationIssue[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTimeSeconds" })
  lastUpdateTimeSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LiveStreamHealthStatusStatusEnum;
}
