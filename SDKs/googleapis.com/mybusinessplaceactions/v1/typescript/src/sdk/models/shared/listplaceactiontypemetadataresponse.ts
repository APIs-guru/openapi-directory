import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlaceActionTypeMetadata } from "./placeactiontypemetadata";


// ListPlaceActionTypeMetadataResponse
/** 
 * Response message for PlaceActions.ListPlaceActionTypeMetadata.
**/
export class ListPlaceActionTypeMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=placeActionTypeMetadata", elemType: shared.PlaceActionTypeMetadata })
  placeActionTypeMetadata?: PlaceActionTypeMetadata[];
}
