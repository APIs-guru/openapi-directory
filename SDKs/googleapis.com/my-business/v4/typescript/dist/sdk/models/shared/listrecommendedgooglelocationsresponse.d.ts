import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleLocation } from "./googlelocation";
/**
 * Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.
**/
export declare class ListRecommendedGoogleLocationsResponse extends SpeakeasyBase {
    googleLocations?: GoogleLocation[];
    nextPageToken?: string;
    totalSize?: number;
}
