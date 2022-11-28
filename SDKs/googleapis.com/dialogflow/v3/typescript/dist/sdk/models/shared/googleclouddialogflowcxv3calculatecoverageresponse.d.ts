import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentCoverage } from "./googleclouddialogflowcxv3intentcoverage";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage } from "./googleclouddialogflowcxv3transitionroutegroupcoverage";
import { GoogleCloudDialogflowCxV3TransitionCoverage } from "./googleclouddialogflowcxv3transitioncoverage";
/**
 * The response message for TestCases.CalculateCoverage.
**/
export declare class GoogleCloudDialogflowCxV3CalculateCoverageResponse extends SpeakeasyBase {
    agent?: string;
    intentCoverage?: GoogleCloudDialogflowCxV3IntentCoverage;
    routeGroupCoverage?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage;
    transitionCoverage?: GoogleCloudDialogflowCxV3TransitionCoverage;
}
