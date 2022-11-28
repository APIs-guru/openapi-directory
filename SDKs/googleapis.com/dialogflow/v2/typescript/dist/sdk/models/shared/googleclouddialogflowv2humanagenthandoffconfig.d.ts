import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig } from "./googleclouddialogflowv2humanagenthandoffconfiglivepersonconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig } from "./googleclouddialogflowv2humanagenthandoffconfigsalesforceliveagentconfig";
/**
 * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
**/
export declare class GoogleCloudDialogflowV2HumanAgentHandoffConfig extends SpeakeasyBase {
    livePersonConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig;
    salesforceLiveAgentConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}
