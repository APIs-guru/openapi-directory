import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PolicyTag } from "./googleclouddatacatalogv1policytag";
/**
 * Response message for ListPolicyTags.
**/
export declare class GoogleCloudDatacatalogV1ListPolicyTagsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policyTags?: GoogleCloudDatacatalogV1PolicyTag[];
}
