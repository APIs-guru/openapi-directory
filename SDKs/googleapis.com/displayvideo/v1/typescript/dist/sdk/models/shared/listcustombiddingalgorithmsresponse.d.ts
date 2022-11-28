import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingAlgorithm } from "./custombiddingalgorithm";
export declare class ListCustomBiddingAlgorithmsResponse extends SpeakeasyBase {
    customBiddingAlgorithms?: CustomBiddingAlgorithm[];
    nextPageToken?: string;
}
