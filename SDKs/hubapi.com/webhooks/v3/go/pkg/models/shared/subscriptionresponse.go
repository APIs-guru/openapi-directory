package shared

import (
	"time"
)

type SubscriptionResponseEventTypeEnum string

const (
	SubscriptionResponseEventTypeEnumContactPropertyChange       SubscriptionResponseEventTypeEnum = "contact.propertyChange"
	SubscriptionResponseEventTypeEnumCompanyPropertyChange       SubscriptionResponseEventTypeEnum = "company.propertyChange"
	SubscriptionResponseEventTypeEnumDealPropertyChange          SubscriptionResponseEventTypeEnum = "deal.propertyChange"
	SubscriptionResponseEventTypeEnumTicketPropertyChange        SubscriptionResponseEventTypeEnum = "ticket.propertyChange"
	SubscriptionResponseEventTypeEnumProductPropertyChange       SubscriptionResponseEventTypeEnum = "product.propertyChange"
	SubscriptionResponseEventTypeEnumLineItemPropertyChange      SubscriptionResponseEventTypeEnum = "line_item.propertyChange"
	SubscriptionResponseEventTypeEnumContactCreation             SubscriptionResponseEventTypeEnum = "contact.creation"
	SubscriptionResponseEventTypeEnumContactDeletion             SubscriptionResponseEventTypeEnum = "contact.deletion"
	SubscriptionResponseEventTypeEnumContactPrivacyDeletion      SubscriptionResponseEventTypeEnum = "contact.privacyDeletion"
	SubscriptionResponseEventTypeEnumCompanyCreation             SubscriptionResponseEventTypeEnum = "company.creation"
	SubscriptionResponseEventTypeEnumCompanyDeletion             SubscriptionResponseEventTypeEnum = "company.deletion"
	SubscriptionResponseEventTypeEnumDealCreation                SubscriptionResponseEventTypeEnum = "deal.creation"
	SubscriptionResponseEventTypeEnumDealDeletion                SubscriptionResponseEventTypeEnum = "deal.deletion"
	SubscriptionResponseEventTypeEnumTicketCreation              SubscriptionResponseEventTypeEnum = "ticket.creation"
	SubscriptionResponseEventTypeEnumTicketDeletion              SubscriptionResponseEventTypeEnum = "ticket.deletion"
	SubscriptionResponseEventTypeEnumProductCreation             SubscriptionResponseEventTypeEnum = "product.creation"
	SubscriptionResponseEventTypeEnumProductDeletion             SubscriptionResponseEventTypeEnum = "product.deletion"
	SubscriptionResponseEventTypeEnumLineItemCreation            SubscriptionResponseEventTypeEnum = "line_item.creation"
	SubscriptionResponseEventTypeEnumLineItemDeletion            SubscriptionResponseEventTypeEnum = "line_item.deletion"
	SubscriptionResponseEventTypeEnumConversationCreation        SubscriptionResponseEventTypeEnum = "conversation.creation"
	SubscriptionResponseEventTypeEnumConversationDeletion        SubscriptionResponseEventTypeEnum = "conversation.deletion"
	SubscriptionResponseEventTypeEnumConversationNewMessage      SubscriptionResponseEventTypeEnum = "conversation.newMessage"
	SubscriptionResponseEventTypeEnumConversationPrivacyDeletion SubscriptionResponseEventTypeEnum = "conversation.privacyDeletion"
	SubscriptionResponseEventTypeEnumConversationPropertyChange  SubscriptionResponseEventTypeEnum = "conversation.propertyChange"
)

type SubscriptionResponse struct {
	Active       bool                              `json:"active"`
	CreatedAt    time.Time                         `json:"createdAt"`
	EventType    SubscriptionResponseEventTypeEnum `json:"eventType"`
	ID           string                            `json:"id"`
	PropertyName *string                           `json:"propertyName"`
	UpdatedAt    *time.Time                        `json:"updatedAt"`
}
