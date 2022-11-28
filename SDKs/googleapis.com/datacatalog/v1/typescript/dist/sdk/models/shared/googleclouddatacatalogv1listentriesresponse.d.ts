import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Entry } from "./googleclouddatacatalogv1entry";
/**
 * Response message for ListEntries.
**/
export declare class GoogleCloudDatacatalogV1ListEntriesResponse extends SpeakeasyBase {
    entries?: GoogleCloudDatacatalogV1Entry[];
    nextPageToken?: string;
}
