import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordMaintenanceJobNoteModel } from "./landlordmaintenancejobnotemodel";
/**
 * Maintenance Job
**/
export declare class LandlordMaintenanceJobModel extends SpeakeasyBase {
    assignedTo?: string;
    closedDate?: Date;
    description?: string;
    maintenanceNotes?: LandlordMaintenanceJobNoteModel[];
    property?: string;
    reported?: Date;
    status?: string;
}
