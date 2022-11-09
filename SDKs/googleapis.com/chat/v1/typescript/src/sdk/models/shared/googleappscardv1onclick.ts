import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1Card } from "./googleappscardv1card";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1OpenLink } from "./googleappscardv1openlink";


// GoogleAppsCardV1OnClick
/** 
 * Represents the response to an `onClick` event.
**/
export class GoogleAppsCardV1OnClick extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: GoogleAppsCardV1Action;

  @Metadata({ data: "json, name=card" })
  card?: GoogleAppsCardV1Card;

  @Metadata({ data: "json, name=openDynamicLinkAction" })
  openDynamicLinkAction?: GoogleAppsCardV1Action;

  @Metadata({ data: "json, name=openLink" })
  openLink?: GoogleAppsCardV1OpenLink;
}
