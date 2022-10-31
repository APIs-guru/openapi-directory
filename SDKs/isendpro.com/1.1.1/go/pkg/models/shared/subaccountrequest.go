package shared




type SubaccountRequestSubAccountEditEnum string

const (
    SubaccountRequestSubAccountEditEnumSetPrice SubaccountRequestSubAccountEditEnum = "setPrice"
SubaccountRequestSubAccountEditEnumAddCredit SubaccountRequestSubAccountEditEnum = "addCredit"
SubaccountRequestSubAccountEditEnumSetRestriction SubaccountRequestSubAccountEditEnum = "setRestriction"
)



type SubaccountRequestSubAccountRestrictionStopEnum string

const (
    SubaccountRequestSubAccountRestrictionStopEnumZero SubaccountRequestSubAccountRestrictionStopEnum = "0"
SubaccountRequestSubAccountRestrictionStopEnumOne SubaccountRequestSubAccountRestrictionStopEnum = "1"
)



type SubaccountRequestSubAccountRestrictionTimeEnum string

const (
    SubaccountRequestSubAccountRestrictionTimeEnumZero SubaccountRequestSubAccountRestrictionTimeEnum = "0"
SubaccountRequestSubAccountRestrictionTimeEnumOne SubaccountRequestSubAccountRestrictionTimeEnum = "1"
)


type SubaccountRequest struct {
    Keyid string `json:"keyid"`
    SubAccountAddCredit *string `json:"subAccountAddCredit,omitempty"`
    SubAccountCountryCode *string `json:"subAccountCountryCode,omitempty"`
    SubAccountEdit SubaccountRequestSubAccountEditEnum `json:"subAccountEdit"`
    SubAccountKeyID *string `json:"subAccountKeyId,omitempty"`
    SubAccountPrice *string `json:"subAccountPrice,omitempty"`
    SubAccountRestrictionStop *SubaccountRequestSubAccountRestrictionStopEnum `json:"subAccountRestrictionStop,omitempty"`
    SubAccountRestrictionTime *SubaccountRequestSubAccountRestrictionTimeEnum `json:"subAccountRestrictionTime,omitempty"`
    
}

