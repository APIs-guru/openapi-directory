import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GuaranteedOrderStatusConfigStatusEnum {
    GuaranteedOrderConfigStatusUnspecified = "GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED"
,    Pending = "PENDING"
,    Completed = "COMPLETED"
}

export enum GuaranteedOrderStatusEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// GuaranteedOrderStatus
/** 
 * The status settings of the guaranteed order.
**/
export class GuaranteedOrderStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=configStatus" })
  configStatus?: GuaranteedOrderStatusConfigStatusEnum;

  @Metadata({ data: "json, name=entityPauseReason" })
  entityPauseReason?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: GuaranteedOrderStatusEntityStatusEnum;
}
