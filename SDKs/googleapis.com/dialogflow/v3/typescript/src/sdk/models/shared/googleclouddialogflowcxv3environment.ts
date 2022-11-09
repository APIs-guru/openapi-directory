import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig } from "./googleclouddialogflowcxv3environmenttestcasesconfig";
import { GoogleCloudDialogflowCxV3EnvironmentVersionConfig } from "./googleclouddialogflowcxv3environmentversionconfig";
import { GoogleCloudDialogflowCxV3EnvironmentWebhookConfig } from "./googleclouddialogflowcxv3environmentwebhookconfig";


// GoogleCloudDialogflowCxV3Environment
/** 
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
export class GoogleCloudDialogflowCxV3Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=testCasesConfig" })
  testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=versionConfigs", elemType: shared.GoogleCloudDialogflowCxV3EnvironmentVersionConfig })
  versionConfigs?: GoogleCloudDialogflowCxV3EnvironmentVersionConfig[];

  @Metadata({ data: "json, name=webhookConfig" })
  webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
}
