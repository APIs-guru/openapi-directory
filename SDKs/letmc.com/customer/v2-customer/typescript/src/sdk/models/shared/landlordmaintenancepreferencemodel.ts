import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordMaintenancePreferenceModel
/** 
 * Maintenance Preference
**/
export class LandlordMaintenancePreferenceModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
