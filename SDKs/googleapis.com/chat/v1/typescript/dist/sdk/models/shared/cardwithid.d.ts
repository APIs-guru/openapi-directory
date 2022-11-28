import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Card } from "./googleappscardv1card";
/**
 * Widgets for Chat apps to specify.
**/
export declare class CardWithId extends SpeakeasyBase {
    card?: GoogleAppsCardV1Card;
    cardId?: string;
}
