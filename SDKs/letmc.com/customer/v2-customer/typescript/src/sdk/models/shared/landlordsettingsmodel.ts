import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordDetailsModel } from "./landlorddetailsmodel";



// LandlordSettingsModel
/** 
 * Landlord Settings
**/
export class LandlordSettingsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LinkedAccounts", elemType: LandlordDetailsModel })
  linkedAccounts?: LandlordDetailsModel[];
}
