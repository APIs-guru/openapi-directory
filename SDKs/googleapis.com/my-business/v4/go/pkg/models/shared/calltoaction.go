package shared

type CallToActionActionTypeEnum string

const (
	CallToActionActionTypeEnumActionTypeUnspecified CallToActionActionTypeEnum = "ACTION_TYPE_UNSPECIFIED"
	CallToActionActionTypeEnumBook                  CallToActionActionTypeEnum = "BOOK"
	CallToActionActionTypeEnumOrder                 CallToActionActionTypeEnum = "ORDER"
	CallToActionActionTypeEnumShop                  CallToActionActionTypeEnum = "SHOP"
	CallToActionActionTypeEnumLearnMore             CallToActionActionTypeEnum = "LEARN_MORE"
	CallToActionActionTypeEnumSignUp                CallToActionActionTypeEnum = "SIGN_UP"
	CallToActionActionTypeEnumGetOffer              CallToActionActionTypeEnum = "GET_OFFER"
	CallToActionActionTypeEnumCall                  CallToActionActionTypeEnum = "CALL"
)

// CallToAction
// An action that is performed when the user clicks through the post
type CallToAction struct {
	ActionType *CallToActionActionTypeEnum `json:"actionType,omitempty"`
	URL        *string                     `json:"url,omitempty"`
}
