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
	AccountID                *string                `json:"accountId,omitempty"`
	AdvertiserID             *string                `json:"advertiserId,omitempty"`
	AmendedOrderDocumentID   *string                `json:"amendedOrderDocumentId,omitempty"`
	ApprovedByUserProfileIds []string               `json:"approvedByUserProfileIds,omitempty"`
	Cancelled                *bool                  `json:"cancelled,omitempty"`
	CreatedInfo              *LastModifiedInfo      `json:"createdInfo,omitempty"`
	EffectiveDate            *time.Time             `json:"effectiveDate,omitempty"`
	ID                       *string                `json:"id,omitempty"`
	Kind                     *string                `json:"kind,omitempty"`
	LastSentRecipients       []string               `json:"lastSentRecipients,omitempty"`
	LastSentTime             *time.Time             `json:"lastSentTime,omitempty"`
	OrderID                  *string                `json:"orderId,omitempty"`
	ProjectID                *string                `json:"projectId,omitempty"`
	Signed                   *bool                  `json:"signed,omitempty"`
	SubaccountID             *string                `json:"subaccountId,omitempty"`
	Title                    *string                `json:"title,omitempty"`
	Type                     *OrderDocumentTypeEnum `json:"type,omitempty"`
}
