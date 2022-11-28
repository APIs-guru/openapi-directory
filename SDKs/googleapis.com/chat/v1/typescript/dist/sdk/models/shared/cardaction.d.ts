import { SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";
/**
 * A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
**/
export declare class CardAction extends SpeakeasyBase {
    actionLabel?: string;
    onClick?: OnClick;
}
