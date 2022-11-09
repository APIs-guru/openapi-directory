import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";


// GoogleCloudDialogflowCxV3beta1TransitionRouteGroup
/** 
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=transitionRoutes", elemType: shared.GoogleCloudDialogflowCxV3beta1TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[];
}
