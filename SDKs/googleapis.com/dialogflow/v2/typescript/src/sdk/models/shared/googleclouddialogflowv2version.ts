import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2VersionStatusEnum {
    VersionStatusUnspecified = "VERSION_STATUS_UNSPECIFIED"
,    InProgress = "IN_PROGRESS"
,    Ready = "READY"
,    Failed = "FAILED"
}


// GoogleCloudDialogflowV2Version
/** 
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
export class GoogleCloudDialogflowV2Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudDialogflowV2VersionStatusEnum;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
