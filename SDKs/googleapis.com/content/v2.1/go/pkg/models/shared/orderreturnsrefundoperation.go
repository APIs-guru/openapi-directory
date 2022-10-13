package shared

type OrderreturnsRefundOperation struct {
	FullRefund         *bool                      `json:"fullRefund"`
	PartialRefund      *OrderreturnsPartialRefund `json:"partialRefund"`
	PaymentType        *string                    `json:"paymentType"`
	ReasonText         *string                    `json:"reasonText"`
	ReturnRefundReason *string                    `json:"returnRefundReason"`
}
