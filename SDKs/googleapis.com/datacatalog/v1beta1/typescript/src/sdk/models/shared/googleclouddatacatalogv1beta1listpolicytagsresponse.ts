import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1PolicyTag } from "./googleclouddatacatalogv1beta1policytag";


// GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
/** 
 * Response message for ListPolicyTags.
**/
export class GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policyTags", elemType: shared.GoogleCloudDatacatalogV1beta1PolicyTag })
  policyTags?: GoogleCloudDatacatalogV1beta1PolicyTag[];
}
