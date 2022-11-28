import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1EntryGroup } from "./googleclouddatacatalogv1beta1entrygroup";
/**
 * Response message for ListEntryGroups.
**/
export declare class GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse extends SpeakeasyBase {
    entryGroups?: GoogleCloudDatacatalogV1beta1EntryGroup[];
    nextPageToken?: string;
}
