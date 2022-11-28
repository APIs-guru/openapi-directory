import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Entry } from "./googleclouddatacatalogv1beta1entry";



// GoogleCloudDatacatalogV1beta1ListEntriesResponse
/** 
 * Response message for ListEntries.
**/
export class GoogleCloudDatacatalogV1beta1ListEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: GoogleCloudDatacatalogV1beta1Entry })
  entries?: GoogleCloudDatacatalogV1beta1Entry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
