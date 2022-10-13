package shared

import (
	"time"
)

type ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum string

const (
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAccepted                             ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Accepted"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedCancellationRequest          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedCancellationRequest"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedCreditSettlementCompleted    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedCreditSettlementCompleted"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedCustomerProfile              ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedCustomerProfile"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedFundsChecked                 ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedFundsChecked"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedSettlementCompleted          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedSettlementCompleted"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedSettlementInProcess          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedSettlementInProcess"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedTechnicalValidation          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedTechnicalValidation"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedWithChange                   ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedWithChange"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumAcceptedWithoutPosting               ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "AcceptedWithoutPosting"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumCancelled                            ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Cancelled"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumNoCancellationProcess                ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "NoCancellationProcess"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPartiallyAcceptedCancellationRequest ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PartiallyAcceptedCancellationRequest"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPartiallyAcceptedTechnicalCorrect    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PartiallyAcceptedTechnicalCorrect"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPaymentCancelled                     ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PaymentCancelled"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPending                              ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Pending"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumPendingCancellationRequest           ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "PendingCancellationRequest"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumReceived                             ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Received"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumRejected                             ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "Rejected"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnumRejectedCancellationRequest          ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = "RejectedCancellationRequest"
)

type ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum string

const (
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumCancelled                ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Cancelled"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumPendingFailingSettlement ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "PendingFailingSettlement"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumPendingSettlement        ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "PendingSettlement"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumProprietary              ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Proprietary"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumProprietaryRejection     ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "ProprietaryRejection"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumSuspended                ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Suspended"
	ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnumUnmatched                ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = "Unmatched"
)

type ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail struct {
	LocalInstrument         *string                                                                      `json:"LocalInstrument"`
	Status                  string                                                                       `json:"Status"`
	StatusReason            *ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum `json:"StatusReason"`
	StatusReasonDescription *string                                                                      `json:"StatusReasonDescription"`
}

type ObWritePaymentDetailsResponse1DataPaymentStatus struct {
	PaymentTransactionID string                                                       `json:"PaymentTransactionId"`
	Status               ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum    `json:"Status"`
	StatusDetail         *ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail `json:"StatusDetail"`
	StatusUpdateDateTime time.Time                                                    `json:"StatusUpdateDateTime"`
}

type ObWritePaymentDetailsResponse1Data struct {
	PaymentStatus []ObWritePaymentDetailsResponse1DataPaymentStatus `json:"PaymentStatus"`
}

type ObWritePaymentDetailsResponse1 struct {
	Data  ObWritePaymentDetailsResponse1Data `json:"Data"`
	Links *Links                             `json:"Links"`
	Meta  *Meta                              `json:"Meta"`
}
