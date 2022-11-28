import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Entry } from "./googleclouddatacatalogv1beta1entry";
/**
 * Response message for ListEntries.
**/
export declare class GoogleCloudDatacatalogV1beta1ListEntriesResponse extends SpeakeasyBase {
    entries?: GoogleCloudDatacatalogV1beta1Entry[];
    nextPageToken?: string;
}
