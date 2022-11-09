import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1Tag } from "./googleclouddatacatalogv1beta1tag";


// GoogleCloudDatacatalogV1beta1ListTagsResponse
/** 
 * Response message for ListTags.
**/
export class GoogleCloudDatacatalogV1beta1ListTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.GoogleCloudDatacatalogV1beta1Tag })
  tags?: GoogleCloudDatacatalogV1beta1Tag[];
}
