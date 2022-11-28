import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Entry } from "./googleclouddatacatalogv1entry";



// GoogleCloudDatacatalogV1ListEntriesResponse
/** 
 * Response message for ListEntries.
**/
export class GoogleCloudDatacatalogV1ListEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: GoogleCloudDatacatalogV1Entry })
  entries?: GoogleCloudDatacatalogV1Entry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
