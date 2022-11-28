import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentCoverage } from "./googleclouddialogflowcxv3beta1intentcoverage";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoverage";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverage } from "./googleclouddialogflowcxv3beta1transitioncoverage";



// GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse
/** 
 * The response message for TestCases.CalculateCoverage.
**/
export class GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: string;

  @SpeakeasyMetadata({ data: "json, name=intentCoverage" })
  intentCoverage?: GoogleCloudDialogflowCxV3beta1IntentCoverage;

  @SpeakeasyMetadata({ data: "json, name=routeGroupCoverage" })
  routeGroupCoverage?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage;

  @SpeakeasyMetadata({ data: "json, name=transitionCoverage" })
  transitionCoverage?: GoogleCloudDialogflowCxV3beta1TransitionCoverage;
}
