import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Card } from "./googleappscardv1card";



// Dialog
/** 
 * Wrapper around the card body of the dialog.
**/
export class Dialog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: GoogleAppsCardV1Card;
}
