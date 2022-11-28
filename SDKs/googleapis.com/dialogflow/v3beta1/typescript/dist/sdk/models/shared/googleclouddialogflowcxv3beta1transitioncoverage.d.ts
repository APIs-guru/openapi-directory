import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition } from "./googleclouddialogflowcxv3beta1transitioncoveragetransition";
/**
 * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionCoverage extends SpeakeasyBase {
    coverageScore?: number;
    transitions?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition[];
}
