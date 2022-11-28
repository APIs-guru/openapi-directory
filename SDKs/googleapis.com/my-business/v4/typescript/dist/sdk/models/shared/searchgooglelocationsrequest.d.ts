import { SpeakeasyBase } from "../../../internal/utils";
import { LocationInput } from "./location";
/**
 * Request message for GoogleLocations.SearchGoogleLocations.
**/
export declare class SearchGoogleLocationsRequestInput extends SpeakeasyBase {
    location?: LocationInput;
    query?: string;
    resultCount?: number;
}
