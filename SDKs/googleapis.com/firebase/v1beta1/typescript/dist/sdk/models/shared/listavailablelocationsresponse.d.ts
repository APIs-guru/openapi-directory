import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";
export declare class ListAvailableLocationsResponse extends SpeakeasyBase {
    locations?: Location[];
    nextPageToken?: string;
}
