import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1VersionStatusEnum {
    VersionStatusUnspecified = "VERSION_STATUS_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Ready = "READY",
    Failed = "FAILED"
}
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
export declare class GoogleCloudDialogflowV2beta1Version extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    name?: string;
    status?: GoogleCloudDialogflowV2beta1VersionStatusEnum;
    versionNumber?: number;
}
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
export declare class GoogleCloudDialogflowV2beta1VersionInput extends SpeakeasyBase {
    description?: string;
}
