import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig
/** 
 * The configuration for continuous tests.
**/
export class GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableContinuousRun" })
  enableContinuousRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePredeploymentRun" })
  enablePredeploymentRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=testCases" })
  testCases?: string[];
}
