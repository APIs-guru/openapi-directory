import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lodging } from "./lodging";



// GetGoogleUpdatedLodgingResponse
/** 
 * Response message for LodgingService.GetGoogleUpdatedLodging
**/
export class GetGoogleUpdatedLodgingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diffMask" })
  diffMask?: string;

  @SpeakeasyMetadata({ data: "json, name=lodging" })
  lodging?: Lodging;
}
