import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";


// GoogleCloudDialogflowCxV3TransitionRouteGroup
/** 
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=transitionRoutes", elemType: shared.GoogleCloudDialogflowCxV3TransitionRoute })
  transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}
