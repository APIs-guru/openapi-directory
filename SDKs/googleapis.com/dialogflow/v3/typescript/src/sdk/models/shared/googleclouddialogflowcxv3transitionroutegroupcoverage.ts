import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage } from "./googleclouddialogflowcxv3transitionroutegroupcoveragecoverage";


// GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage
/** 
 * Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @Metadata({ data: "json, name=coverages", elemType: shared.GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage })
  coverages?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage[];
}
