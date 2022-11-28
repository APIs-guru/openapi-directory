import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1EntryGroup } from "./googleclouddatacatalogv1entrygroup";
/**
 * Response message for ListEntryGroups.
**/
export declare class GoogleCloudDatacatalogV1ListEntryGroupsResponse extends SpeakeasyBase {
    entryGroups?: GoogleCloudDatacatalogV1EntryGroup[];
    nextPageToken?: string;
}
