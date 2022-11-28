import { SpeakeasyBase } from "../../../internal/utils";
import { Beacon } from "./beacon";
/**
 * Response that contains list beacon results and pagination help.
**/
export declare class ListBeaconsResponse extends SpeakeasyBase {
    beacons?: Beacon[];
    nextPageToken?: string;
    totalCount?: string;
}
