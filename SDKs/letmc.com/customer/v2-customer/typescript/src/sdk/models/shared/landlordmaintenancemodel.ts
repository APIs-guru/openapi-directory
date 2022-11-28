import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordMaintenanceJobModel } from "./landlordmaintenancejobmodel";



// LandlordMaintenanceModel
/** 
 * Landlord Maintenance
**/
export class LandlordMaintenanceModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Jobs", elemType: LandlordMaintenanceJobModel })
  jobs?: LandlordMaintenanceJobModel[];
}
