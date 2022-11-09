import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BiddingStrategy } from "./biddingstrategy";
import { InsertionOrderBudget } from "./insertionorderbudget";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PerformanceGoal } from "./performancegoal";

export enum InsertionOrderBillableOutcomeEnum {
    BillableOutcomeUnspecified = "BILLABLE_OUTCOME_UNSPECIFIED"
,    BillableOutcomePayPerImpression = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION"
,    BillableOutcomePayPerClick = "BILLABLE_OUTCOME_PAY_PER_CLICK"
,    BillableOutcomePayPerViewableImpression = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION"
}

export enum InsertionOrderEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}

export enum InsertionOrderInsertionOrderTypeEnum {
    InsertionOrderTypeUnspecified = "INSERTION_ORDER_TYPE_UNSPECIFIED"
,    Rtb = "RTB"
,    OverTheTop = "OVER_THE_TOP"
}

export enum InsertionOrderReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED"
,    ReservationTypeNotGuaranteed = "RESERVATION_TYPE_NOT_GUARANTEED"
,    ReservationTypeProgrammaticGuaranteed = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
,    ReservationTypeTagGuaranteed = "RESERVATION_TYPE_TAG_GUARANTEED"
,    ReservationTypePetraViral = "RESERVATION_TYPE_PETRA_VIRAL"
,    ReservationTypeInstantReserve = "RESERVATION_TYPE_INSTANT_RESERVE"
}


// InsertionOrder
/** 
 * A single insertion order.
**/
export class InsertionOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=bidStrategy" })
  bidStrategy?: BiddingStrategy;

  @Metadata({ data: "json, name=billableOutcome" })
  billableOutcome?: InsertionOrderBillableOutcomeEnum;

  @Metadata({ data: "json, name=budget" })
  budget?: InsertionOrderBudget;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: InsertionOrderEntityStatusEnum;

  @Metadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;

  @Metadata({ data: "json, name=insertionOrderId" })
  insertionOrderId?: string;

  @Metadata({ data: "json, name=insertionOrderType" })
  insertionOrderType?: InsertionOrderInsertionOrderTypeEnum;

  @Metadata({ data: "json, name=integrationDetails" })
  integrationDetails?: IntegrationDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pacing" })
  pacing?: Pacing;

  @Metadata({ data: "json, name=partnerCosts", elemType: shared.PartnerCost })
  partnerCosts?: PartnerCost[];

  @Metadata({ data: "json, name=performanceGoal" })
  performanceGoal?: PerformanceGoal;

  @Metadata({ data: "json, name=reservationType" })
  reservationType?: InsertionOrderReservationTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
