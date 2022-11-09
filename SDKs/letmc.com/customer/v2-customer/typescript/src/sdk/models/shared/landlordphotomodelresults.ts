import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordPhotoModel } from "./landlordphotomodel";


// LandlordPhotoModelResults
/** 
 * Holds results from a paged query returning LandlordPhotoModel values
**/
export class LandlordPhotoModelResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Data", elemType: shared.LandlordPhotoModel })
  data?: LandlordPhotoModel[];
}
