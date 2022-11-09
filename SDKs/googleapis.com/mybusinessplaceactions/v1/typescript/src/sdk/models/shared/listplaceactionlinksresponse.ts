import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlaceActionLink } from "./placeactionlink";


// ListPlaceActionLinksResponse
/** 
 * Response message for PlaceActions.ListPlaceActionLinks.
**/
export class ListPlaceActionLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=placeActionLinks", elemType: shared.PlaceActionLink })
  placeActionLinks?: PlaceActionLink[];
}
