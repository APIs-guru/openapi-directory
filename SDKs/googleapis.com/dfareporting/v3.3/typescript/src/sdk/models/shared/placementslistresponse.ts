import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Placement } from "./placement";



// PlacementsListResponse
/** 
 * Placement List Response
**/
export class PlacementsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=placements", elemType: Placement })
  placements?: Placement[];
}
