import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";


// GoogleAppsCardV1CardAction
/** 
 * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Google Chat apps.
**/
export class GoogleAppsCardV1CardAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionLabel" })
  actionLabel?: string;

  @Metadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;
}
