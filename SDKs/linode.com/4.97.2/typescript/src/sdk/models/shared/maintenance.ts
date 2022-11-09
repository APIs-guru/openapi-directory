import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MaintenanceEntity
/** 
 * The entity being affected by maintenance.
 * 
**/
export class MaintenanceEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum MaintenanceStatusEnum {
    Pending = "pending"
,    Started = "started"
}

export enum MaintenanceTypeEnum {
    Reboot = "reboot"
,    ColdMigration = "cold_migration"
,    LiveMigration = "live_migration"
}


// Maintenance
/** 
 * Information about maintenance affecting an entity.
 * 
**/
export class Maintenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity" })
  entity?: MaintenanceEntity;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: MaintenanceStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: MaintenanceTypeEnum;

  @Metadata({ data: "json, name=when" })
  when?: Date;
}
