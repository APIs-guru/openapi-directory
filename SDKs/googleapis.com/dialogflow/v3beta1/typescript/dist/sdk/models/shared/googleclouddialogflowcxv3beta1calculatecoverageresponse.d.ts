import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentCoverage } from "./googleclouddialogflowcxv3beta1intentcoverage";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoverage";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverage } from "./googleclouddialogflowcxv3beta1transitioncoverage";
/**
 * The response message for TestCases.CalculateCoverage.
**/
export declare class GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse extends SpeakeasyBase {
    agent?: string;
    intentCoverage?: GoogleCloudDialogflowCxV3beta1IntentCoverage;
    routeGroupCoverage?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage;
    transitionCoverage?: GoogleCloudDialogflowCxV3beta1TransitionCoverage;
}
