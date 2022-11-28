import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CallToActionActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Book = "BOOK",
    Order = "ORDER",
    Shop = "SHOP",
    LearnMore = "LEARN_MORE",
    SignUp = "SIGN_UP",
    GetOffer = "GET_OFFER",
    Call = "CALL"
}
/**
 * An action that is performed when the user clicks through the post
**/
export declare class CallToAction extends SpeakeasyBase {
    actionType?: CallToActionActionTypeEnum;
    url?: string;
}
