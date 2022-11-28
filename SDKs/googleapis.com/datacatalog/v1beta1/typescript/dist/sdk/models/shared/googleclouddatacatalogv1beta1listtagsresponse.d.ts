import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Tag } from "./googleclouddatacatalogv1beta1tag";
/**
 * Response message for ListTags.
**/
export declare class GoogleCloudDatacatalogV1beta1ListTagsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tags?: GoogleCloudDatacatalogV1beta1Tag[];
}
