package shared

type OrderreturnsRefundOperation struct {
	FullRefund         *bool                      `json:"fullRefund,omitempty"`
	PartialRefund      *OrderreturnsPartialRefund `json:"partialRefund,omitempty"`
	PaymentType        *string                    `json:"paymentType,omitempty"`
	ReasonText         *string                    `json:"reasonText,omitempty"`
	ReturnRefundReason *string                    `json:"returnRefundReason,omitempty"`
}
