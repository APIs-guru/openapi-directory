import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordDetailsModel } from "./landlorddetailsmodel";


// LandlordSettingsModel
/** 
 * Landlord Settings
**/
export class LandlordSettingsModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=LinkedAccounts", elemType: shared.LandlordDetailsModel })
  linkedAccounts?: LandlordDetailsModel[];
}
