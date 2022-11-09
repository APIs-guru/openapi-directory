import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoveragetransition";


// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage
/** 
 * Coverage result message for one transition route group.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @Metadata({ data: "json, name=routeGroup" })
  routeGroup?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

  @Metadata({ data: "json, name=transitions", elemType: shared.GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition[];
}
