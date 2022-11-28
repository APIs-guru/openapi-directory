import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PolicyTag } from "./googleclouddatacatalogv1policytag";



// GoogleCloudDatacatalogV1ListPolicyTagsResponse
/** 
 * Response message for ListPolicyTags.
**/
export class GoogleCloudDatacatalogV1ListPolicyTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTags", elemType: GoogleCloudDatacatalogV1PolicyTag })
  policyTags?: GoogleCloudDatacatalogV1PolicyTag[];
}
