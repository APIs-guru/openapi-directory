import { SpeakeasyBase } from "../../../internal/utils";
import { LogView } from "./logview";
/**
 * The response from ListViews.
**/
export declare class ListViewsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    views?: LogView[];
}
