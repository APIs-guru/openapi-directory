package shared

type AccountReturnCarrierCarrierCodeEnum string

const (
	AccountReturnCarrierCarrierCodeEnumCarrierCodeUnspecified AccountReturnCarrierCarrierCodeEnum = "CARRIER_CODE_UNSPECIFIED"
	AccountReturnCarrierCarrierCodeEnumFedex                  AccountReturnCarrierCarrierCodeEnum = "FEDEX"
	AccountReturnCarrierCarrierCodeEnumUps                    AccountReturnCarrierCarrierCodeEnum = "UPS"
)

type AccountReturnCarrier struct {
	CarrierAccountID     *string                              `json:"carrierAccountId,omitempty"`
	CarrierAccountName   *string                              `json:"carrierAccountName,omitempty"`
	CarrierAccountNumber *string                              `json:"carrierAccountNumber,omitempty"`
	CarrierCode          *AccountReturnCarrierCarrierCodeEnum `json:"carrierCode,omitempty"`
}
