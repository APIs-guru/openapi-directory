package shared

type SubaccountRequestSubAccountEditEnum string

const (
	SubaccountRequestSubAccountEditEnumSetPrice       SubaccountRequestSubAccountEditEnum = "setPrice"
	SubaccountRequestSubAccountEditEnumAddCredit      SubaccountRequestSubAccountEditEnum = "addCredit"
	SubaccountRequestSubAccountEditEnumSetRestriction SubaccountRequestSubAccountEditEnum = "setRestriction"
)

type SubaccountRequestSubAccountRestrictionStopEnum string

const (
	SubaccountRequestSubAccountRestrictionStopEnumZero SubaccountRequestSubAccountRestrictionStopEnum = "0"
	SubaccountRequestSubAccountRestrictionStopEnumOne  SubaccountRequestSubAccountRestrictionStopEnum = "1"
)

type SubaccountRequestSubAccountRestrictionTimeEnum string

const (
	SubaccountRequestSubAccountRestrictionTimeEnumZero SubaccountRequestSubAccountRestrictionTimeEnum = "0"
	SubaccountRequestSubAccountRestrictionTimeEnumOne  SubaccountRequestSubAccountRestrictionTimeEnum = "1"
)

type SubaccountRequest struct {
	Keyid                     string                                          `json:"keyid"`
	SubAccountAddCredit       *string                                         `json:"subAccountAddCredit"`
	SubAccountCountryCode     *string                                         `json:"subAccountCountryCode"`
	SubAccountEdit            SubaccountRequestSubAccountEditEnum             `json:"subAccountEdit"`
	SubAccountKeyID           *string                                         `json:"subAccountKeyId"`
	SubAccountPrice           *string                                         `json:"subAccountPrice"`
	SubAccountRestrictionStop *SubaccountRequestSubAccountRestrictionStopEnum `json:"subAccountRestrictionStop"`
	SubAccountRestrictionTime *SubaccountRequestSubAccountRestrictionTimeEnum `json:"subAccountRestrictionTime"`
}
