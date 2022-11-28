import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The entity being affected by maintenance.
 *
**/
export declare class MaintenanceEntity extends SpeakeasyBase {
    id?: number;
    label?: string;
    type?: string;
    url?: string;
}
export declare enum MaintenanceStatusEnum {
    Pending = "pending",
    Started = "started"
}
export declare enum MaintenanceTypeEnum {
    Reboot = "reboot",
    ColdMigration = "cold_migration",
    LiveMigration = "live_migration"
}
/**
 * Information about maintenance affecting an entity.
 *
**/
export declare class Maintenance extends SpeakeasyBase {
    entity?: MaintenanceEntity;
    reason?: string;
    status?: MaintenanceStatusEnum;
    type?: MaintenanceTypeEnum;
    when?: Date;
}
