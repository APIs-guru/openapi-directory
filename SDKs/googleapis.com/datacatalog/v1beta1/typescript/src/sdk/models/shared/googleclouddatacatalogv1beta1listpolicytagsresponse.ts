import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1PolicyTag } from "./googleclouddatacatalogv1beta1policytag";



// GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
/** 
 * Response message for ListPolicyTags.
**/
export class GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTags", elemType: GoogleCloudDatacatalogV1beta1PolicyTag })
  policyTags?: GoogleCloudDatacatalogV1beta1PolicyTag[];
}
