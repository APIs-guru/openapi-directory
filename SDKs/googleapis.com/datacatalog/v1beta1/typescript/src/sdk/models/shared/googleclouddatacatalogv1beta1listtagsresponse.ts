import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Tag } from "./googleclouddatacatalogv1beta1tag";



// GoogleCloudDatacatalogV1beta1ListTagsResponse
/** 
 * Response message for ListTags.
**/
export class GoogleCloudDatacatalogV1beta1ListTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: GoogleCloudDatacatalogV1beta1Tag })
  tags?: GoogleCloudDatacatalogV1beta1Tag[];
}
