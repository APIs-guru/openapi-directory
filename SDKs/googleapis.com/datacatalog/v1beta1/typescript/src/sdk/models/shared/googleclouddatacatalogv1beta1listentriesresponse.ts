import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1Entry } from "./googleclouddatacatalogv1beta1entry";


// GoogleCloudDatacatalogV1beta1ListEntriesResponse
/** 
 * Response message for ListEntries.
**/
export class GoogleCloudDatacatalogV1beta1ListEntriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.GoogleCloudDatacatalogV1beta1Entry })
  entries?: GoogleCloudDatacatalogV1beta1Entry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
