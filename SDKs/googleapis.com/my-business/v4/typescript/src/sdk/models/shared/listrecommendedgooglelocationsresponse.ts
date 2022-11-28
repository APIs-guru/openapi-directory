import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleLocation } from "./googlelocation";



// ListRecommendedGoogleLocationsResponse
/** 
 * Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.
**/
export class ListRecommendedGoogleLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleLocations", elemType: GoogleLocation })
  googleLocations?: GoogleLocation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
