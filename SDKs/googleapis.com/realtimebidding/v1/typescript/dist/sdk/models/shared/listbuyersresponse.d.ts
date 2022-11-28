import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
/**
 * A response containing buyer account information.
**/
export declare class ListBuyersResponse extends SpeakeasyBase {
    buyers?: Buyer[];
    nextPageToken?: string;
}
