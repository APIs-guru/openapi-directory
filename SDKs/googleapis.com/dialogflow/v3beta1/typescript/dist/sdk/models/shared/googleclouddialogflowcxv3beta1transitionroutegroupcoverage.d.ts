import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoverage";
/**
 * Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage extends SpeakeasyBase {
    coverageScore?: number;
    coverages?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage[];
}
