import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentCoverage } from "./googleclouddialogflowcxv3intentcoverage";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage } from "./googleclouddialogflowcxv3transitionroutegroupcoverage";
import { GoogleCloudDialogflowCxV3TransitionCoverage } from "./googleclouddialogflowcxv3transitioncoverage";



// GoogleCloudDialogflowCxV3CalculateCoverageResponse
/** 
 * The response message for TestCases.CalculateCoverage.
**/
export class GoogleCloudDialogflowCxV3CalculateCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: string;

  @SpeakeasyMetadata({ data: "json, name=intentCoverage" })
  intentCoverage?: GoogleCloudDialogflowCxV3IntentCoverage;

  @SpeakeasyMetadata({ data: "json, name=routeGroupCoverage" })
  routeGroupCoverage?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage;

  @SpeakeasyMetadata({ data: "json, name=transitionCoverage" })
  transitionCoverage?: GoogleCloudDialogflowCxV3TransitionCoverage;
}
