import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";



// GoogleAppsCardV1CardAction
/** 
 * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Chat apps.
**/
export class GoogleAppsCardV1CardAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionLabel" })
  actionLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;
}
