import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Fulfillment } from "./googleclouddialogflowv2fulfillment";
import { GoogleCloudDialogflowV2TextToSpeechSettings } from "./googleclouddialogflowv2texttospeechsettings";
export declare enum GoogleCloudDialogflowV2EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Stopped = "STOPPED",
    Loading = "LOADING",
    Running = "RUNNING"
}
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
export declare class GoogleCloudDialogflowV2EnvironmentInput extends SpeakeasyBase {
    agentVersion?: string;
    description?: string;
    fulfillment?: GoogleCloudDialogflowV2Fulfillment;
    textToSpeechSettings?: GoogleCloudDialogflowV2TextToSpeechSettings;
}
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
export declare class GoogleCloudDialogflowV2Environment extends SpeakeasyBase {
    agentVersion?: string;
    description?: string;
    fulfillment?: GoogleCloudDialogflowV2Fulfillment;
    name?: string;
    state?: GoogleCloudDialogflowV2EnvironmentStateEnum;
    textToSpeechSettings?: GoogleCloudDialogflowV2TextToSpeechSettings;
    updateTime?: string;
}
