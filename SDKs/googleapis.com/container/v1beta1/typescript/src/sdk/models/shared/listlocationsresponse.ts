import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Location } from "./location";


// ListLocationsResponse
/** 
 * ListLocationsResponse returns the list of all GKE locations and their recommendation state.
**/
export class ListLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations?: Location[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
