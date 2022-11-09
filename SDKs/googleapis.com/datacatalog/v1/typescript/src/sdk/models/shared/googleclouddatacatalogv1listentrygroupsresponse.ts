import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1EntryGroup } from "./googleclouddatacatalogv1entrygroup";


// GoogleCloudDatacatalogV1ListEntryGroupsResponse
/** 
 * Response message for ListEntryGroups.
**/
export class GoogleCloudDatacatalogV1ListEntryGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryGroups", elemType: shared.GoogleCloudDatacatalogV1EntryGroup })
  entryGroups?: GoogleCloudDatacatalogV1EntryGroup[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
