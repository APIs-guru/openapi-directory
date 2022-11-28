import { SpeakeasyBase } from "../../../internal/utils";
import { Bidder } from "./bidder";
/**
 * A response containing bidders.
**/
export declare class ListBiddersResponse extends SpeakeasyBase {
    bidders?: Bidder[];
    nextPageToken?: string;
}
