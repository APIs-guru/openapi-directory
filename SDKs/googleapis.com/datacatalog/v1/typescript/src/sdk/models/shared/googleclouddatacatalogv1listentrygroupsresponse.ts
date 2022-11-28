import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1EntryGroup } from "./googleclouddatacatalogv1entrygroup";



// GoogleCloudDatacatalogV1ListEntryGroupsResponse
/** 
 * Response message for ListEntryGroups.
**/
export class GoogleCloudDatacatalogV1ListEntryGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryGroups", elemType: GoogleCloudDatacatalogV1EntryGroup })
  entryGroups?: GoogleCloudDatacatalogV1EntryGroup[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
