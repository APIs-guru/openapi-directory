import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition } from "./googleclouddialogflowcxv3beta1transitioncoveragetransition";


// GoogleCloudDialogflowCxV3beta1TransitionCoverage
/** 
 * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @Metadata({ data: "json, name=transitions", elemType: shared.GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition[];
}
