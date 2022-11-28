import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Tag } from "./googleclouddatacatalogv1tag";
/**
 * Response message for ListTags.
**/
export declare class GoogleCloudDatacatalogV1ListTagsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tags?: GoogleCloudDatacatalogV1Tag[];
}
