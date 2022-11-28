import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1EntryGroup } from "./googleclouddatacatalogv1beta1entrygroup";



// GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
/** 
 * Response message for ListEntryGroups.
**/
export class GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryGroups", elemType: GoogleCloudDatacatalogV1beta1EntryGroup })
  entryGroups?: GoogleCloudDatacatalogV1beta1EntryGroup[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
