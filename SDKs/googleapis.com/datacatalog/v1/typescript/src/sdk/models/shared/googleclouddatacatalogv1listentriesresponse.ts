import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1Entry } from "./googleclouddatacatalogv1entry";


// GoogleCloudDatacatalogV1ListEntriesResponse
/** 
 * Response message for ListEntries.
**/
export class GoogleCloudDatacatalogV1ListEntriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.GoogleCloudDatacatalogV1Entry })
  entries?: GoogleCloudDatacatalogV1Entry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
