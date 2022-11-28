import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CallToActionActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Book = "BOOK",
    Order = "ORDER",
    Shop = "SHOP",
    LearnMore = "LEARN_MORE",
    SignUp = "SIGN_UP",
    GetOffer = "GET_OFFER",
    Call = "CALL"
}


// CallToAction
/** 
 * An action that is performed when the user clicks through the post
**/
export class CallToAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: CallToActionActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
