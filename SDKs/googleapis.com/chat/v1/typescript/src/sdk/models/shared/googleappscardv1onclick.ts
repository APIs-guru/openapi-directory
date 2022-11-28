import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1Card } from "./googleappscardv1card";
import { GoogleAppsCardV1OpenLink } from "./googleappscardv1openlink";



// GoogleAppsCardV1OnClick
/** 
 * Represents how to respond when users click an interactive element on a card, such as a button.
**/
export class GoogleAppsCardV1OnClick extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: GoogleAppsCardV1Action;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: GoogleAppsCardV1Card;

  @SpeakeasyMetadata({ data: "json, name=openDynamicLinkAction" })
  openDynamicLinkAction?: GoogleAppsCardV1Action;

  @SpeakeasyMetadata({ data: "json, name=openLink" })
  openLink?: GoogleAppsCardV1OpenLink;
}
