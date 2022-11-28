import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
export declare class ListItemsResponse extends SpeakeasyBase {
    items?: Item[];
    nextPageToken?: string;
}
