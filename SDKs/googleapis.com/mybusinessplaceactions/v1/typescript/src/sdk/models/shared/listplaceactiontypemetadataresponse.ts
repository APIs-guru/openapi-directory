import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaceActionTypeMetadata } from "./placeactiontypemetadata";



// ListPlaceActionTypeMetadataResponse
/** 
 * Response message for PlaceActions.ListPlaceActionTypeMetadata.
**/
export class ListPlaceActionTypeMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=placeActionTypeMetadata", elemType: PlaceActionTypeMetadata })
  placeActionTypeMetadata?: PlaceActionTypeMetadata[];
}
