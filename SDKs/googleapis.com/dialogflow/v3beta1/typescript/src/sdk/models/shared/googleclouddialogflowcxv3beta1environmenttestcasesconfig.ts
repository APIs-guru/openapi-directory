import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig
/** 
 * The configuration for continuous tests.
**/
export class GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableContinuousRun" })
  enableContinuousRun?: boolean;

  @Metadata({ data: "json, name=enablePredeploymentRun" })
  enablePredeploymentRun?: boolean;

  @Metadata({ data: "json, name=testCases" })
  testCases?: string[];
}
