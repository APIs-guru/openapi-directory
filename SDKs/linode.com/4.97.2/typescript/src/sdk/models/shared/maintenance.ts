import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceEntity
/** 
 * The entity being affected by maintenance.
 * 
**/
export class MaintenanceEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum MaintenanceStatusEnum {
    Pending = "pending",
    Started = "started"
}

export enum MaintenanceTypeEnum {
    Reboot = "reboot",
    ColdMigration = "cold_migration",
    LiveMigration = "live_migration"
}


// Maintenance
/** 
 * Information about maintenance affecting an entity.
 * 
**/
export class Maintenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: MaintenanceEntity;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MaintenanceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MaintenanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=when" })
  when?: Date;
}
