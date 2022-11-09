import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InventorySourceStatusConfigStatusEnum {
    InventorySourceConfigStatusUnspecified = "INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED"
,    InventorySourceConfigStatusPending = "INVENTORY_SOURCE_CONFIG_STATUS_PENDING"
,    InventorySourceConfigStatusCompleted = "INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED"
}

export enum InventorySourceStatusEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}

export enum InventorySourceStatusSellerStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// InventorySourceStatus
/** 
 * The status related settings of the inventory source.
**/
export class InventorySourceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=configStatus" })
  configStatus?: InventorySourceStatusConfigStatusEnum;

  @Metadata({ data: "json, name=entityPauseReason" })
  entityPauseReason?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: InventorySourceStatusEntityStatusEnum;

  @Metadata({ data: "json, name=sellerPauseReason" })
  sellerPauseReason?: string;

  @Metadata({ data: "json, name=sellerStatus" })
  sellerStatus?: InventorySourceStatusSellerStatusEnum;
}
