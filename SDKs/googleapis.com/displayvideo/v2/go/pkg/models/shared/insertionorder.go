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
	InsertionOrderReservationTypeEnumReservationTypePetraViral             InsertionOrderReservationTypeEnum = "RESERVATION_TYPE_PETRA_VIRAL"
	InsertionOrderReservationTypeEnumReservationTypeInstantReserve         InsertionOrderReservationTypeEnum = "RESERVATION_TYPE_INSTANT_RESERVE"
)

type InsertionOrder struct {
	AdvertiserID       *string                               `json:"advertiserId"`
	BidStrategy        *BiddingStrategy                      `json:"bidStrategy"`
	BillableOutcome    *InsertionOrderBillableOutcomeEnum    `json:"billableOutcome"`
	Budget             *InsertionOrderBudget                 `json:"budget"`
	CampaignID         *string                               `json:"campaignId"`
	DisplayName        *string                               `json:"displayName"`
	EntityStatus       *InsertionOrderEntityStatusEnum       `json:"entityStatus"`
	FrequencyCap       *FrequencyCap                         `json:"frequencyCap"`
	InsertionOrderID   *string                               `json:"insertionOrderId"`
	InsertionOrderType *InsertionOrderInsertionOrderTypeEnum `json:"insertionOrderType"`
	IntegrationDetails *IntegrationDetails                   `json:"integrationDetails"`
	Name               *string                               `json:"name"`
	Pacing             *Pacing                               `json:"pacing"`
	PartnerCosts       []PartnerCost                         `json:"partnerCosts"`
	PerformanceGoal    *PerformanceGoal                      `json:"performanceGoal"`
	ReservationType    *InsertionOrderReservationTypeEnum    `json:"reservationType"`
	UpdateTime         *string                               `json:"updateTime"`
}
