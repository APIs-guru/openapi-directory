import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";



// GoogleAppsCardV1ButtonList
/** 
 * A list of buttons layed out horizontally.
**/
export class GoogleAppsCardV1ButtonList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: GoogleAppsCardV1Button })
  buttons?: GoogleAppsCardV1Button[];
}
