import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig } from "./googleclouddialogflowv2humanagenthandoffconfiglivepersonconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig } from "./googleclouddialogflowv2humanagenthandoffconfigsalesforceliveagentconfig";


// GoogleCloudDialogflowV2HumanAgentHandoffConfig
/** 
 * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
**/
export class GoogleCloudDialogflowV2HumanAgentHandoffConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=livePersonConfig" })
  livePersonConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig;

  @Metadata({ data: "json, name=salesforceLiveAgentConfig" })
  salesforceLiveAgentConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}
