import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1Tag } from "./googleclouddatacatalogv1tag";


// GoogleCloudDatacatalogV1ListTagsResponse
/** 
 * Response message for ListTags.
**/
export class GoogleCloudDatacatalogV1ListTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.GoogleCloudDatacatalogV1Tag })
  tags?: GoogleCloudDatacatalogV1Tag[];
}
