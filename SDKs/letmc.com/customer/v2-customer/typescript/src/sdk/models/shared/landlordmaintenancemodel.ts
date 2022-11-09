import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordMaintenanceJobModel } from "./landlordmaintenancejobmodel";


// LandlordMaintenanceModel
/** 
 * Landlord Maintenance
**/
export class LandlordMaintenanceModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Jobs", elemType: shared.LandlordMaintenanceJobModel })
  jobs?: LandlordMaintenanceJobModel[];
}
