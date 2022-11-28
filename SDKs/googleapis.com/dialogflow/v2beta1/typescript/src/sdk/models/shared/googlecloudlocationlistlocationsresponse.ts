import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudLocationLocation } from "./googlecloudlocationlocation";



// GoogleCloudLocationListLocationsResponse
/** 
 * The response message for Locations.ListLocations.
**/
export class GoogleCloudLocationListLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: GoogleCloudLocationLocation })
  locations?: GoogleCloudLocationLocation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
