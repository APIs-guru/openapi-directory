import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig } from "./googleclouddialogflowcxv3environmenttestcasesconfig";
import { GoogleCloudDialogflowCxV3EnvironmentVersionConfig } from "./googleclouddialogflowcxv3environmentversionconfig";
import { GoogleCloudDialogflowCxV3EnvironmentWebhookConfig } from "./googleclouddialogflowcxv3environmentwebhookconfig";
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
export declare class GoogleCloudDialogflowCxV3EnvironmentInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
    versionConfigs?: GoogleCloudDialogflowCxV3EnvironmentVersionConfig[];
    webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
export declare class GoogleCloudDialogflowCxV3Environment extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
    updateTime?: string;
    versionConfigs?: GoogleCloudDialogflowCxV3EnvironmentVersionConfig[];
    webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}
