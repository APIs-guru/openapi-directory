import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";


// GoogleAppsCardV1ButtonList
/** 
 * A list of buttons layed out horizontally.
**/
export class GoogleAppsCardV1ButtonList extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.GoogleAppsCardV1Button })
  buttons?: GoogleAppsCardV1Button[];
}
