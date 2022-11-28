import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";



// CardAction
/** 
 * A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
**/
export class CardAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionLabel" })
  actionLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: OnClick;
}
