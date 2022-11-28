import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GuaranteedOrderStatusConfigStatusEnum {
    GuaranteedOrderConfigStatusUnspecified = "GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Completed = "COMPLETED"
}
export declare enum GuaranteedOrderStatusEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * The status settings of the guaranteed order.
**/
export declare class GuaranteedOrderStatus extends SpeakeasyBase {
    configStatus?: GuaranteedOrderStatusConfigStatusEnum;
    entityPauseReason?: string;
    entityStatus?: GuaranteedOrderStatusEntityStatusEnum;
}
/**
 * The status settings of the guaranteed order.
**/
export declare class GuaranteedOrderStatusInput extends SpeakeasyBase {
    entityPauseReason?: string;
    entityStatus?: GuaranteedOrderStatusEntityStatusEnum;
}
