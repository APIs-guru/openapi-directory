import { SpeakeasyBase } from "../../../internal/utils";
import { BiddingStrategy } from "./biddingstrategy";
import { InsertionOrderBudget } from "./insertionorderbudget";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PerformanceGoal } from "./performancegoal";
export declare enum InsertionOrderBillableOutcomeEnum {
    BillableOutcomeUnspecified = "BILLABLE_OUTCOME_UNSPECIFIED",
    BillableOutcomePayPerImpression = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION",
    BillableOutcomePayPerClick = "BILLABLE_OUTCOME_PAY_PER_CLICK",
    BillableOutcomePayPerViewableImpression = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION"
}
export declare enum InsertionOrderEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
export declare enum InsertionOrderInsertionOrderTypeEnum {
    InsertionOrderTypeUnspecified = "INSERTION_ORDER_TYPE_UNSPECIFIED",
    Rtb = "RTB",
    OverTheTop = "OVER_THE_TOP"
}
export declare enum InsertionOrderReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    ReservationTypeNotGuaranteed = "RESERVATION_TYPE_NOT_GUARANTEED",
    ReservationTypeProgrammaticGuaranteed = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED",
    ReservationTypeTagGuaranteed = "RESERVATION_TYPE_TAG_GUARANTEED",
    ReservationTypePetraViral = "RESERVATION_TYPE_PETRA_VIRAL",
    ReservationTypeInstantReserve = "RESERVATION_TYPE_INSTANT_RESERVE"
}
/**
 * A single insertion order.
**/
export declare class InsertionOrderInput extends SpeakeasyBase {
    bidStrategy?: BiddingStrategy;
    billableOutcome?: InsertionOrderBillableOutcomeEnum;
    budget?: InsertionOrderBudget;
    campaignId?: string;
    displayName?: string;
    entityStatus?: InsertionOrderEntityStatusEnum;
    frequencyCap?: FrequencyCap;
    insertionOrderType?: InsertionOrderInsertionOrderTypeEnum;
    integrationDetails?: IntegrationDetails;
    pacing?: Pacing;
    partnerCosts?: PartnerCost[];
    performanceGoal?: PerformanceGoal;
}
/**
 * A single insertion order.
**/
export declare class InsertionOrder extends SpeakeasyBase {
    advertiserId?: string;
    bidStrategy?: BiddingStrategy;
    billableOutcome?: InsertionOrderBillableOutcomeEnum;
    budget?: InsertionOrderBudget;
    campaignId?: string;
    displayName?: string;
    entityStatus?: InsertionOrderEntityStatusEnum;
    frequencyCap?: FrequencyCap;
    insertionOrderId?: string;
    insertionOrderType?: InsertionOrderInsertionOrderTypeEnum;
    integrationDetails?: IntegrationDetails;
    name?: string;
    pacing?: Pacing;
    partnerCosts?: PartnerCost[];
    performanceGoal?: PerformanceGoal;
    reservationType?: InsertionOrderReservationTypeEnum;
    updateTime?: string;
}
