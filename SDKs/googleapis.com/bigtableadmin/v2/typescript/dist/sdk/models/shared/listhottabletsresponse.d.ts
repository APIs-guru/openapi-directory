import { SpeakeasyBase } from "../../../internal/utils";
import { HotTablet } from "./hottablet";
/**
 * Response message for BigtableInstanceAdmin.ListHotTablets.
**/
export declare class ListHotTabletsResponse extends SpeakeasyBase {
    hotTablets?: HotTablet[];
    nextPageToken?: string;
}
