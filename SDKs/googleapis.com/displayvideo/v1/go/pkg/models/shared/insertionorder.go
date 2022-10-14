package shared

type InsertionOrderBillableOutcomeEnum string

const (
	InsertionOrderBillableOutcomeEnumBillableOutcomeUnspecified              InsertionOrderBillableOutcomeEnum = "BILLABLE_OUTCOME_UNSPECIFIED"
	InsertionOrderBillableOutcomeEnumBillableOutcomePayPerImpression         InsertionOrderBillableOutcomeEnum = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION"
	InsertionOrderBillableOutcomeEnumBillableOutcomePayPerClick              InsertionOrderBillableOutcomeEnum = "BILLABLE_OUTCOME_PAY_PER_CLICK"
	InsertionOrderBillableOutcomeEnumBillableOutcomePayPerViewableImpression InsertionOrderBillableOutcomeEnum = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION"
)

type InsertionOrderEntityStatusEnum string

const (
	InsertionOrderEntityStatusEnumEntityStatusUnspecified          InsertionOrderEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	InsertionOrderEntityStatusEnumEntityStatusActive               InsertionOrderEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	InsertionOrderEntityStatusEnumEntityStatusArchived             InsertionOrderEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	InsertionOrderEntityStatusEnumEntityStatusDraft                InsertionOrderEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	InsertionOrderEntityStatusEnumEntityStatusPaused               InsertionOrderEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	InsertionOrderEntityStatusEnumEntityStatusScheduledForDeletion InsertionOrderEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type InsertionOrderInsertionOrderTypeEnum string

const (
	InsertionOrderInsertionOrderTypeEnumInsertionOrderTypeUnspecified InsertionOrderInsertionOrderTypeEnum = "INSERTION_ORDER_TYPE_UNSPECIFIED"
	InsertionOrderInsertionOrderTypeEnumRtb                           InsertionOrderInsertionOrderTypeEnum = "RTB"
	InsertionOrderInsertionOrderTypeEnumOverTheTop                    InsertionOrderInsertionOrderTypeEnum = "OVER_THE_TOP"
)

type InsertionOrderReservationTypeEnum string

const (
	InsertionOrderReservationTypeEnumReservationTypeUnspecified            InsertionOrderReservationTypeEnum = "RESERVATION_TYPE_UNSPECIFIED"
	InsertionOrderReservationTypeEnumReservationTypeNotGuaranteed          InsertionOrderReservationTypeEnum = "RESERVATION_TYPE_NOT_GUARANTEED"
	InsertionOrderReservationTypeEnumReservationTypeProgrammaticGuaranteed InsertionOrderReservationTypeEnum = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
	InsertionOrderReservationTypeEnumReservationTypeTagGuaranteed          InsertionOrderReservationTypeEnum = "RESERVATION_TYPE_TAG_GUARANTEED"
)

type InsertionOrder struct {
	AdvertiserID       *string                               `json:"advertiserId,omitempty"`
	BidStrategy        *BiddingStrategy                      `json:"bidStrategy,omitempty"`
	BillableOutcome    *InsertionOrderBillableOutcomeEnum    `json:"billableOutcome,omitempty"`
	Budget             *InsertionOrderBudget                 `json:"budget,omitempty"`
	CampaignID         *string                               `json:"campaignId,omitempty"`
	DisplayName        *string                               `json:"displayName,omitempty"`
	EntityStatus       *InsertionOrderEntityStatusEnum       `json:"entityStatus,omitempty"`
	FrequencyCap       *FrequencyCap                         `json:"frequencyCap,omitempty"`
	InsertionOrderID   *string                               `json:"insertionOrderId,omitempty"`
	InsertionOrderType *InsertionOrderInsertionOrderTypeEnum `json:"insertionOrderType,omitempty"`
	IntegrationDetails *IntegrationDetails                   `json:"integrationDetails,omitempty"`
	Name               *string                               `json:"name,omitempty"`
	Pacing             *Pacing                               `json:"pacing,omitempty"`
	PartnerCosts       []PartnerCost                         `json:"partnerCosts,omitempty"`
	PerformanceGoal    *PerformanceGoal                      `json:"performanceGoal,omitempty"`
	ReservationType    *InsertionOrderReservationTypeEnum    `json:"reservationType,omitempty"`
	UpdateTime         *string                               `json:"updateTime,omitempty"`
}
