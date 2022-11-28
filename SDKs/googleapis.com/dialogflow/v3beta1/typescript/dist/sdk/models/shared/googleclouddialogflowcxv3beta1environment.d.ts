import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig } from "./googleclouddialogflowcxv3beta1environmenttestcasesconfig";
import { GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig } from "./googleclouddialogflowcxv3beta1environmentversionconfig";
import { GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig } from "./googleclouddialogflowcxv3beta1environmentwebhookconfig";
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
export declare class GoogleCloudDialogflowCxV3beta1EnvironmentInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
    versionConfigs?: GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig[];
    webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
}
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
export declare class GoogleCloudDialogflowCxV3beta1Environment extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
    updateTime?: string;
    versionConfigs?: GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig[];
    webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
}
