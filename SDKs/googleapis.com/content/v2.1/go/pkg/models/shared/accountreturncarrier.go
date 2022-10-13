package shared

type AccountReturnCarrierCarrierCodeEnum string

const (
	AccountReturnCarrierCarrierCodeEnumCarrierCodeUnspecified AccountReturnCarrierCarrierCodeEnum = "CARRIER_CODE_UNSPECIFIED"
	AccountReturnCarrierCarrierCodeEnumFedex                  AccountReturnCarrierCarrierCodeEnum = "FEDEX"
	AccountReturnCarrierCarrierCodeEnumUps                    AccountReturnCarrierCarrierCodeEnum = "UPS"
)

type AccountReturnCarrier struct {
	CarrierAccountID     *string                              `json:"carrierAccountId"`
	CarrierAccountName   *string                              `json:"carrierAccountName"`
	CarrierAccountNumber *string                              `json:"carrierAccountNumber"`
	CarrierCode          *AccountReturnCarrierCarrierCodeEnum `json:"carrierCode"`
}
