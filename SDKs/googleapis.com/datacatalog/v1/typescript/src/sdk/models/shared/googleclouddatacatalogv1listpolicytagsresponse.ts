import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1PolicyTag } from "./googleclouddatacatalogv1policytag";


// GoogleCloudDatacatalogV1ListPolicyTagsResponse
/** 
 * Response message for ListPolicyTags.
**/
export class GoogleCloudDatacatalogV1ListPolicyTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policyTags", elemType: shared.GoogleCloudDatacatalogV1PolicyTag })
  policyTags?: GoogleCloudDatacatalogV1PolicyTag[];
}
