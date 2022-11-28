import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * ListLocationsResponse returns the list of all GKE locations and their recommendation state.
**/
export declare class ListLocationsResponse extends SpeakeasyBase {
    locations?: Location[];
    nextPageToken?: string;
}
