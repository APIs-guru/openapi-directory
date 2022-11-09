import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleLocation } from "./googlelocation";


// ListRecommendedGoogleLocationsResponse
/** 
 * Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.
**/
export class ListRecommendedGoogleLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleLocations", elemType: shared.GoogleLocation })
  googleLocations?: GoogleLocation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
