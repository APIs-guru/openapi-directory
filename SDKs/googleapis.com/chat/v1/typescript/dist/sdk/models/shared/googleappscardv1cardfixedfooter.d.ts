import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";
/**
 * A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Chat apps support `fixedFooter` in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not in [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
**/
export declare class GoogleAppsCardV1CardFixedFooter extends SpeakeasyBase {
    primaryButton?: GoogleAppsCardV1Button;
    secondaryButton?: GoogleAppsCardV1Button;
}
