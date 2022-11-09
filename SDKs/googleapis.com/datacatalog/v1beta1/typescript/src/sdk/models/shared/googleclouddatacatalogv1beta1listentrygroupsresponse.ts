import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1EntryGroup } from "./googleclouddatacatalogv1beta1entrygroup";


// GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
/** 
 * Response message for ListEntryGroups.
**/
export class GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryGroups", elemType: shared.GoogleCloudDatacatalogV1beta1EntryGroup })
  entryGroups?: GoogleCloudDatacatalogV1beta1EntryGroup[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
