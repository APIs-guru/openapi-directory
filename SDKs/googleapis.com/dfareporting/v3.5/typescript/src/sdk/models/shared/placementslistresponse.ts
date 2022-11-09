import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Placement } from "./placement";


// PlacementsListResponse
/** 
 * Placement List Response
**/
export class PlacementsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=placements", elemType: shared.Placement })
  placements?: Placement[];
}
