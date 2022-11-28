import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InventorySourceStatusConfigStatusEnum {
    InventorySourceConfigStatusUnspecified = "INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED",
    InventorySourceConfigStatusPending = "INVENTORY_SOURCE_CONFIG_STATUS_PENDING",
    InventorySourceConfigStatusCompleted = "INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED"
}

export enum InventorySourceStatusEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}

export enum InventorySourceStatusSellerStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// InventorySourceStatus
/** 
 * The status related settings of the inventory source.
**/
export class InventorySourceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configStatus" })
  configStatus?: InventorySourceStatusConfigStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=entityPauseReason" })
  entityPauseReason?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: InventorySourceStatusEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sellerPauseReason" })
  sellerPauseReason?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerStatus" })
  sellerStatus?: InventorySourceStatusSellerStatusEnum;
}


// InventorySourceStatusInput
/** 
 * The status related settings of the inventory source.
**/
export class InventorySourceStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityPauseReason" })
  entityPauseReason?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: InventorySourceStatusEntityStatusEnum;
}
