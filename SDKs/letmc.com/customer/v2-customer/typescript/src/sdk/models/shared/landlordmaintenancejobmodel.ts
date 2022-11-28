import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordMaintenanceJobNoteModel } from "./landlordmaintenancejobnotemodel";



// LandlordMaintenanceJobModel
/** 
 * Maintenance Job
**/
export class LandlordMaintenanceJobModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignedTo" })
  assignedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=ClosedDate" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceNotes", elemType: LandlordMaintenanceJobNoteModel })
  maintenanceNotes?: LandlordMaintenanceJobNoteModel[];

  @SpeakeasyMetadata({ data: "json, name=Property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=Reported" })
  reported?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
