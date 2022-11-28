import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationInput } from "./location";



// SearchGoogleLocationsRequestInput
/** 
 * Request message for GoogleLocations.SearchGoogleLocations.
**/
export class SearchGoogleLocationsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: LocationInput;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
