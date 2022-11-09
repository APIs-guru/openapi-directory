import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1Fulfillment } from "./googleclouddialogflowv2beta1fulfillment";
import { GoogleCloudDialogflowV2beta1TextToSpeechSettings } from "./googleclouddialogflowv2beta1texttospeechsettings";

export enum GoogleCloudDialogflowV2beta1EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Stopped = "STOPPED"
,    Loading = "LOADING"
,    Running = "RUNNING"
}


// GoogleCloudDialogflowV2beta1Environment
/** 
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
export class GoogleCloudDialogflowV2beta1Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fulfillment" })
  fulfillment?: GoogleCloudDialogflowV2beta1Fulfillment;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowV2beta1EnvironmentStateEnum;

  @Metadata({ data: "json, name=textToSpeechSettings" })
  textToSpeechSettings?: GoogleCloudDialogflowV2beta1TextToSpeechSettings;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
