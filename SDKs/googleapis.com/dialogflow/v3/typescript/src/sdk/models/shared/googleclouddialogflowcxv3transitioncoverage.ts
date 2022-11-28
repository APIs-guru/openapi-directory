import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionCoverageTransition } from "./googleclouddialogflowcxv3transitioncoveragetransition";



// GoogleCloudDialogflowCxV3TransitionCoverage
/** 
 * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
**/
export class GoogleCloudDialogflowCxV3TransitionCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=transitions", elemType: GoogleCloudDialogflowCxV3TransitionCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3TransitionCoverageTransition[];
}
