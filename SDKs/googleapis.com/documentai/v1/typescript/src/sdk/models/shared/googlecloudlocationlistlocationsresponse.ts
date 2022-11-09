import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudLocationLocation } from "./googlecloudlocationlocation";


// GoogleCloudLocationListLocationsResponse
/** 
 * The response message for Locations.ListLocations.
**/
export class GoogleCloudLocationListLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.GoogleCloudLocationLocation })
  locations?: GoogleCloudLocationLocation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
