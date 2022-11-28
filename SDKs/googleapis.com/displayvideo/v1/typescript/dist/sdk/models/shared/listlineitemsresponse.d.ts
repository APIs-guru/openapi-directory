import { SpeakeasyBase } from "../../../internal/utils";
import { LineItem } from "./lineitem";
export declare class ListLineItemsResponse extends SpeakeasyBase {
    lineItems?: LineItem[];
    nextPageToken?: string;
}
