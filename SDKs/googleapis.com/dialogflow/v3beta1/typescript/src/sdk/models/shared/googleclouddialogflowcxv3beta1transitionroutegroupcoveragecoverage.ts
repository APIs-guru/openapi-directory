import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoveragetransition";



// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage
/** 
 * Coverage result message for one transition route group.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=routeGroup" })
  routeGroup?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

  @SpeakeasyMetadata({ data: "json, name=transitions", elemType: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition[];
}
