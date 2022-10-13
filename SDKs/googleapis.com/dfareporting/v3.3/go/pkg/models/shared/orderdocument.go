package shared

import (
	"time"
)

type OrderDocumentTypeEnum string

const (
	OrderDocumentTypeEnumPlanningOrderTypeInsertionOrder OrderDocumentTypeEnum = "PLANNING_ORDER_TYPE_INSERTION_ORDER"
	OrderDocumentTypeEnumPlanningOrderTypeChangeOrder    OrderDocumentTypeEnum = "PLANNING_ORDER_TYPE_CHANGE_ORDER"
)

type OrderDocument struct {
	AccountID                *string                `json:"accountId"`
	AdvertiserID             *string                `json:"advertiserId"`
	AmendedOrderDocumentID   *string                `json:"amendedOrderDocumentId"`
	ApprovedByUserProfileIds []string               `json:"approvedByUserProfileIds"`
	Cancelled                *bool                  `json:"cancelled"`
	CreatedInfo              *LastModifiedInfo      `json:"createdInfo"`
	EffectiveDate            *time.Time             `json:"effectiveDate"`
	ID                       *string                `json:"id"`
	Kind                     *string                `json:"kind"`
	LastSentRecipients       []string               `json:"lastSentRecipients"`
	LastSentTime             *time.Time             `json:"lastSentTime"`
	OrderID                  *string                `json:"orderId"`
	ProjectID                *string                `json:"projectId"`
	Signed                   *bool                  `json:"signed"`
	SubaccountID             *string                `json:"subaccountId"`
	Title                    *string                `json:"title"`
	Type                     *OrderDocumentTypeEnum `json:"type"`
}
