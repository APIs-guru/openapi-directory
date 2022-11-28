import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response message for BigtableInstanceAdmin.ListInstances.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    failedLocations?: string[];
    instances?: Instance[];
    nextPageToken?: string;
}
