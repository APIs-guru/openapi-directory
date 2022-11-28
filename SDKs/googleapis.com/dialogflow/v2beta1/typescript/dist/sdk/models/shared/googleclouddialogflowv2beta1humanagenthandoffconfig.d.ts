import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfiglivepersonconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfigsalesforceliveagentconfig";
/**
 * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
**/
export declare class GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig extends SpeakeasyBase {
    livePersonConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig;
    salesforceLiveAgentConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig;
}
