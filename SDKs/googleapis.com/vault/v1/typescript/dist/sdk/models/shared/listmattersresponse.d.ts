import { SpeakeasyBase } from "../../../internal/utils";
import { Matter } from "./matter";
/**
 * Provides the list of matters.
**/
export declare class ListMattersResponse extends SpeakeasyBase {
    matters?: Matter[];
    nextPageToken?: string;
}
