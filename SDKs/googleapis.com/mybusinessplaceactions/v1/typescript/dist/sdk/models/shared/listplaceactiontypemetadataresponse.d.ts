import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlaceActionTypeMetadata } from "./placeactiontypemetadata";
/**
 * Response message for PlaceActions.ListPlaceActionTypeMetadata.
**/
export declare class ListPlaceActionTypeMetadataResponse extends SpeakeasyBase {
    nextPageToken?: string;
    placeActionTypeMetadata?: PlaceActionTypeMetadata[];
}
