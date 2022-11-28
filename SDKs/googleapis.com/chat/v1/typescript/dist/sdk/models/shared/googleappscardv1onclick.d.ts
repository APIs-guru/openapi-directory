import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1Card } from "./googleappscardv1card";
import { GoogleAppsCardV1OpenLink } from "./googleappscardv1openlink";
/**
 * Represents how to respond when users click an interactive element on a card, such as a button.
**/
export declare class GoogleAppsCardV1OnClick extends SpeakeasyBase {
    action?: GoogleAppsCardV1Action;
    card?: GoogleAppsCardV1Card;
    openDynamicLinkAction?: GoogleAppsCardV1Action;
    openLink?: GoogleAppsCardV1OpenLink;
}
