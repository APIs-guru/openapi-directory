import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CallToActionActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED"
,    Book = "BOOK"
,    Order = "ORDER"
,    Shop = "SHOP"
,    LearnMore = "LEARN_MORE"
,    SignUp = "SIGN_UP"
,    GetOffer = "GET_OFFER"
,    Call = "CALL"
}


// CallToAction
/** 
 * An action that is performed when the user clicks through the post
**/
export class CallToAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType?: CallToActionActionTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
