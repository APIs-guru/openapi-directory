import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition } from "./googleclouddialogflowcxv3beta1transitioncoveragetransition";



// GoogleCloudDialogflowCxV3beta1TransitionCoverage
/** 
 * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=transitions", elemType: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition[];
}
