import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordPhotoModel } from "./landlordphotomodel";



// LandlordPhotoModelResults
/** 
 * Holds results from a paged query returning LandlordPhotoModel values
**/
export class LandlordPhotoModelResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Data", elemType: LandlordPhotoModel })
  data?: LandlordPhotoModel[];
}
