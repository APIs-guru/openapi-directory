import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoveragetransition";
/**
 * Coverage result message for one transition route group.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
    coverageScore?: number;
    routeGroup?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
    transitions?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition[];
}
