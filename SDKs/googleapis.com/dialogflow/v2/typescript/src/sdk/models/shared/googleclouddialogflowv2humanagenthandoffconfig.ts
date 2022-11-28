import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig } from "./googleclouddialogflowv2humanagenthandoffconfiglivepersonconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig } from "./googleclouddialogflowv2humanagenthandoffconfigsalesforceliveagentconfig";



// GoogleCloudDialogflowV2HumanAgentHandoffConfig
/** 
 * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
**/
export class GoogleCloudDialogflowV2HumanAgentHandoffConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=livePersonConfig" })
  livePersonConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig;

  @SpeakeasyMetadata({ data: "json, name=salesforceLiveAgentConfig" })
  salesforceLiveAgentConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}
