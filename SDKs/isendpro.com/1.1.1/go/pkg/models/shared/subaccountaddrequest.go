package shared

type SubaccountAddRequestSubAccountEditEnum string

const (
	SubaccountAddRequestSubAccountEditEnumAddAccount SubaccountAddRequestSubAccountEditEnum = "addAccount"
)

type SubaccountAddRequest struct {
	Keyid              string                                 `json:"keyid"`
	SubAccountEdit     SubaccountAddRequestSubAccountEditEnum `json:"subAccountEdit"`
	SubAccountLogin    string                                 `json:"subAccountLogin"`
	SubAccountPassword string                                 `json:"subAccountPassword"`
}
