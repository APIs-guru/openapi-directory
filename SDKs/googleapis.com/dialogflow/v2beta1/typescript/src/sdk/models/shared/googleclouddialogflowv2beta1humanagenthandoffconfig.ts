import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfiglivepersonconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfigsalesforceliveagentconfig";



// GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig
/** 
 * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=livePersonConfig" })
  livePersonConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig;

  @SpeakeasyMetadata({ data: "json, name=salesforceLiveAgentConfig" })
  salesforceLiveAgentConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}
