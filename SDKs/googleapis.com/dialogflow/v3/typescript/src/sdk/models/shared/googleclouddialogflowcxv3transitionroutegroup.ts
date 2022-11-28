import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";



// GoogleCloudDialogflowCxV3TransitionRouteGroup
/** 
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}


// GoogleCloudDialogflowCxV3TransitionRouteGroupInput
/** 
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRouteInput })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRouteInput[];
}
