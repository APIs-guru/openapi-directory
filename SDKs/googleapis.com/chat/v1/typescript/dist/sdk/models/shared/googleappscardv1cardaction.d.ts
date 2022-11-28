import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
/**
 * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Chat apps.
**/
export declare class GoogleAppsCardV1CardAction extends SpeakeasyBase {
    actionLabel?: string;
    onClick?: GoogleAppsCardV1OnClick;
}
