import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig } from "./googleclouddialogflowcxv3environmenttestcasesconfig";
import { GoogleCloudDialogflowCxV3EnvironmentVersionConfig } from "./googleclouddialogflowcxv3environmentversionconfig";
import { GoogleCloudDialogflowCxV3EnvironmentWebhookConfig } from "./googleclouddialogflowcxv3environmentwebhookconfig";



// GoogleCloudDialogflowCxV3EnvironmentInput
/** 
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
export class GoogleCloudDialogflowCxV3EnvironmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testCasesConfig" })
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;

  @SpeakeasyMetadata({ data: "json, name=versionConfigs", elemType: GoogleCloudDialogflowCxV3EnvironmentVersionConfig })
  versionConfigs?: GoogleCloudDialogflowCxV3EnvironmentVersionConfig[];

  @SpeakeasyMetadata({ data: "json, name=webhookConfig" })
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}


// GoogleCloudDialogflowCxV3Environment
/** 
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
export class GoogleCloudDialogflowCxV3Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testCasesConfig" })
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionConfigs", elemType: GoogleCloudDialogflowCxV3EnvironmentVersionConfig })
  versionConfigs?: GoogleCloudDialogflowCxV3EnvironmentVersionConfig[];

  @SpeakeasyMetadata({ data: "json, name=webhookConfig" })
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}
