import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRouteGroup } from "./googleclouddialogflowcxv3transitionroutegroup";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3transitionroutegroupcoveragecoveragetransition";
/**
 * Coverage result message for one transition route group.
**/
export declare class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
    coverageScore?: number;
    routeGroup?: GoogleCloudDialogflowCxV3TransitionRouteGroup;
    transitions?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition[];
}
