import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordMaintenanceJobNoteModel } from "./landlordmaintenancejobnotemodel";


// LandlordMaintenanceJobModel
/** 
 * Maintenance Job
**/
export class LandlordMaintenanceJobModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignedTo" })
  assignedTo?: string;

  @Metadata({ data: "json, name=ClosedDate" })
  closedDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MaintenanceNotes", elemType: shared.LandlordMaintenanceJobNoteModel })
  maintenanceNotes?: LandlordMaintenanceJobNoteModel[];

  @Metadata({ data: "json, name=Property" })
  property?: string;

  @Metadata({ data: "json, name=Reported" })
  reported?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
