import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoverage";



// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage
/** 
 * Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=coverages", elemType: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage })
  coverages?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage[];
}
