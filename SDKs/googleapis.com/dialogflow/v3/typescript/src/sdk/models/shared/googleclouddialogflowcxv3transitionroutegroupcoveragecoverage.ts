import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRouteGroup } from "./googleclouddialogflowcxv3transitionroutegroup";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3transitionroutegroupcoveragecoveragetransition";



// GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage
/** 
 * Coverage result message for one transition route group.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=routeGroup" })
  routeGroup?: GoogleCloudDialogflowCxV3TransitionRouteGroup;

  @SpeakeasyMetadata({ data: "json, name=transitions", elemType: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition[];
}
