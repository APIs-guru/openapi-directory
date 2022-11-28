import { SpeakeasyBase } from "../../../internal/utils";
import { PlaceActionLink } from "./placeactionlink";
/**
 * Response message for PlaceActions.ListPlaceActionLinks.
**/
export declare class ListPlaceActionLinksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    placeActionLinks?: PlaceActionLink[];
}
