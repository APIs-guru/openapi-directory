import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InventorySourceStatusConfigStatusEnum {
    InventorySourceConfigStatusUnspecified = "INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED",
    InventorySourceConfigStatusPending = "INVENTORY_SOURCE_CONFIG_STATUS_PENDING",
    InventorySourceConfigStatusCompleted = "INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED"
}
export declare enum InventorySourceStatusEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
export declare enum InventorySourceStatusSellerStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * The status related settings of the inventory source.
**/
export declare class InventorySourceStatus extends SpeakeasyBase {
    configStatus?: InventorySourceStatusConfigStatusEnum;
    entityPauseReason?: string;
    entityStatus?: InventorySourceStatusEntityStatusEnum;
    sellerPauseReason?: string;
    sellerStatus?: InventorySourceStatusSellerStatusEnum;
}
/**
 * The status related settings of the inventory source.
**/
export declare class InventorySourceStatusInput extends SpeakeasyBase {
    entityPauseReason?: string;
    entityStatus?: InventorySourceStatusEntityStatusEnum;
}
