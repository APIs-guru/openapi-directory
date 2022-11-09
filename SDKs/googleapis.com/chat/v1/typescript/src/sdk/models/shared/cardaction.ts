import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnClick } from "./onclick";


// CardAction
/** 
 * A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
**/
export class CardAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionLabel" })
  actionLabel?: string;

  @Metadata({ data: "json, name=onClick" })
  onClick?: OnClick;
}
