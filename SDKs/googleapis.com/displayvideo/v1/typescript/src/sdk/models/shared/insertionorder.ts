import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BiddingStrategy } from "./biddingstrategy";
import { InsertionOrderBudget } from "./insertionorderbudget";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PerformanceGoal } from "./performancegoal";


export enum InsertionOrderBillableOutcomeEnum {
    BillableOutcomeUnspecified = "BILLABLE_OUTCOME_UNSPECIFIED",
    BillableOutcomePayPerImpression = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION",
    BillableOutcomePayPerClick = "BILLABLE_OUTCOME_PAY_PER_CLICK",
    BillableOutcomePayPerViewableImpression = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION"
}

export enum InsertionOrderEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}

export enum InsertionOrderInsertionOrderTypeEnum {
    InsertionOrderTypeUnspecified = "INSERTION_ORDER_TYPE_UNSPECIFIED",
    Rtb = "RTB",
    OverTheTop = "OVER_THE_TOP"
}

export enum InsertionOrderReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    ReservationTypeNotGuaranteed = "RESERVATION_TYPE_NOT_GUARANTEED",
    ReservationTypeProgrammaticGuaranteed = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED",
    ReservationTypeTagGuaranteed = "RESERVATION_TYPE_TAG_GUARANTEED"
}


// InsertionOrderInput
/** 
 * A single insertion order.
**/
export class InsertionOrderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidStrategy" })
  bidStrategy?: BiddingStrategy;

  @SpeakeasyMetadata({ data: "json, name=billableOutcome" })
  billableOutcome?: InsertionOrderBillableOutcomeEnum;

  @SpeakeasyMetadata({ data: "json, name=budget" })
  budget?: InsertionOrderBudget;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: InsertionOrderEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;

  @SpeakeasyMetadata({ data: "json, name=insertionOrderType" })
  insertionOrderType?: InsertionOrderInsertionOrderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=integrationDetails" })
  integrationDetails?: IntegrationDetails;

  @SpeakeasyMetadata({ data: "json, name=pacing" })
  pacing?: Pacing;

  @SpeakeasyMetadata({ data: "json, name=partnerCosts", elemType: PartnerCost })
  partnerCosts?: PartnerCost[];

  @SpeakeasyMetadata({ data: "json, name=performanceGoal" })
  performanceGoal?: PerformanceGoal;
}


// InsertionOrder
/** 
 * A single insertion order.
**/
export class InsertionOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=bidStrategy" })
  bidStrategy?: BiddingStrategy;

  @SpeakeasyMetadata({ data: "json, name=billableOutcome" })
  billableOutcome?: InsertionOrderBillableOutcomeEnum;

  @SpeakeasyMetadata({ data: "json, name=budget" })
  budget?: InsertionOrderBudget;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: InsertionOrderEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;

  @SpeakeasyMetadata({ data: "json, name=insertionOrderId" })
  insertionOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=insertionOrderType" })
  insertionOrderType?: InsertionOrderInsertionOrderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=integrationDetails" })
  integrationDetails?: IntegrationDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pacing" })
  pacing?: Pacing;

  @SpeakeasyMetadata({ data: "json, name=partnerCosts", elemType: PartnerCost })
  partnerCosts?: PartnerCost[];

  @SpeakeasyMetadata({ data: "json, name=performanceGoal" })
  performanceGoal?: PerformanceGoal;

  @SpeakeasyMetadata({ data: "json, name=reservationType" })
  reservationType?: InsertionOrderReservationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
