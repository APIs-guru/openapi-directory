import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TransitionCoverageTransition } from "./googleclouddialogflowcxv3transitioncoveragetransition";


// GoogleCloudDialogflowCxV3TransitionCoverage
/** 
 * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
**/
export class GoogleCloudDialogflowCxV3TransitionCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @Metadata({ data: "json, name=transitions", elemType: shared.GoogleCloudDialogflowCxV3TransitionCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3TransitionCoverageTransition[];
}
