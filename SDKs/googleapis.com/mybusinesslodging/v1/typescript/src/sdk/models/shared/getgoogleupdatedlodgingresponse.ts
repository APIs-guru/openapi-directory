import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Lodging } from "./lodging";


// GetGoogleUpdatedLodgingResponse
/** 
 * Response message for LodgingService.GetGoogleUpdatedLodging
**/
export class GetGoogleUpdatedLodgingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=diffMask" })
  diffMask?: string;

  @Metadata({ data: "json, name=lodging" })
  lodging?: Lodging;
}
