package shared

type AccountReturnCarrierCarrierCodeEnum string

const (
	AccountReturnCarrierCarrierCodeEnumCarrierCodeUnspecified AccountReturnCarrierCarrierCodeEnum = "CARRIER_CODE_UNSPECIFIED"
	AccountReturnCarrierCarrierCodeEnumFedex                  AccountReturnCarrierCarrierCodeEnum = "FEDEX"
	AccountReturnCarrierCarrierCodeEnumUps                    AccountReturnCarrierCarrierCodeEnum = "UPS"
)

// AccountReturnCarrierInput
//
//	The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.
type AccountReturnCarrierInput struct {
	CarrierAccountName   *string                              `json:"carrierAccountName,omitempty"`
	CarrierAccountNumber *string                              `json:"carrierAccountNumber,omitempty"`
	CarrierCode          *AccountReturnCarrierCarrierCodeEnum `json:"carrierCode,omitempty"`
}

// AccountReturnCarrier
//
//	The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.
type AccountReturnCarrier struct {
	CarrierAccountID     *string                              `json:"carrierAccountId,omitempty"`
	CarrierAccountName   *string                              `json:"carrierAccountName,omitempty"`
	CarrierAccountNumber *string                              `json:"carrierAccountNumber,omitempty"`
	CarrierCode          *AccountReturnCarrierCarrierCodeEnum `json:"carrierCode,omitempty"`
}
