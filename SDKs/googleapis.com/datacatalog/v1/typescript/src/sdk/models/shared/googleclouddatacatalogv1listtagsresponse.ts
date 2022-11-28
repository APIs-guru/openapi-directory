import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Tag } from "./googleclouddatacatalogv1tag";



// GoogleCloudDatacatalogV1ListTagsResponse
/** 
 * Response message for ListTags.
**/
export class GoogleCloudDatacatalogV1ListTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: GoogleCloudDatacatalogV1Tag })
  tags?: GoogleCloudDatacatalogV1Tag[];
}
