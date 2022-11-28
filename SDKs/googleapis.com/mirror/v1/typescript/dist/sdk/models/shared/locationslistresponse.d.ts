import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * A list of Locations. This is the response from the server to GET requests on the locations collection.
**/
export declare class LocationsListResponse extends SpeakeasyBase {
    items?: Location[];
    kind?: string;
}
