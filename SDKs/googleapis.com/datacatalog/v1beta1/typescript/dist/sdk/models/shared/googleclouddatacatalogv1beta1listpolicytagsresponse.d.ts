import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1PolicyTag } from "./googleclouddatacatalogv1beta1policytag";
/**
 * Response message for ListPolicyTags.
**/
export declare class GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policyTags?: GoogleCloudDatacatalogV1beta1PolicyTag[];
}
