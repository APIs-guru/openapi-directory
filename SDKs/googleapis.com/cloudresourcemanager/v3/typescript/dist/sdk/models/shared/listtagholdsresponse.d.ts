import { SpeakeasyBase } from "../../../internal/utils";
import { TagHold } from "./taghold";
/**
 * The ListTagHolds response.
**/
export declare class ListTagHoldsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tagHolds?: TagHold[];
}
