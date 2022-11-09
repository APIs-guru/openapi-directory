import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3IntentCoverage } from "./googleclouddialogflowcxv3intentcoverage";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage } from "./googleclouddialogflowcxv3transitionroutegroupcoverage";
import { GoogleCloudDialogflowCxV3TransitionCoverage } from "./googleclouddialogflowcxv3transitioncoverage";


// GoogleCloudDialogflowCxV3CalculateCoverageResponse
/** 
 * The response message for TestCases.CalculateCoverage.
**/
export class GoogleCloudDialogflowCxV3CalculateCoverageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent" })
  agent?: string;

  @Metadata({ data: "json, name=intentCoverage" })
  intentCoverage?: GoogleCloudDialogflowCxV3IntentCoverage;

  @Metadata({ data: "json, name=routeGroupCoverage" })
  routeGroupCoverage?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage;

  @Metadata({ data: "json, name=transitionCoverage" })
  transitionCoverage?: GoogleCloudDialogflowCxV3TransitionCoverage;
}
