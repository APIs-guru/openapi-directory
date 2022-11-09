import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordMaintenancePreferenceModel
/** 
 * Maintenance Preference
**/
export class LandlordMaintenancePreferenceModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
