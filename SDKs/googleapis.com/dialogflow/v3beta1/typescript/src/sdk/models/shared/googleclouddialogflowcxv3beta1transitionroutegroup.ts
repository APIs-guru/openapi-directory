import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";



// GoogleCloudDialogflowCxV3beta1TransitionRouteGroup
/** 
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[];
}


// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput
/** 
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRouteInput })
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRouteInput[];
}
