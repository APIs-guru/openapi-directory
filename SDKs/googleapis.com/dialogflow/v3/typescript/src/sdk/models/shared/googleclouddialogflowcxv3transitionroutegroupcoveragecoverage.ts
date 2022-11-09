import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TransitionRouteGroup } from "./googleclouddialogflowcxv3transitionroutegroup";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3transitionroutegroupcoveragecoveragetransition";


// GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage
/** 
 * Coverage result message for one transition route group.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @Metadata({ data: "json, name=routeGroup" })
  routeGroup?: GoogleCloudDialogflowCxV3TransitionRouteGroup;

  @Metadata({ data: "json, name=transitions", elemType: shared.GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition })
  transitions?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition[];
}
