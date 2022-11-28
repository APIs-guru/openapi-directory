import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaceActionLink } from "./placeactionlink";



// ListPlaceActionLinksResponse
/** 
 * Response message for PlaceActions.ListPlaceActionLinks.
**/
export class ListPlaceActionLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=placeActionLinks", elemType: PlaceActionLink })
  placeActionLinks?: PlaceActionLink[];
}
