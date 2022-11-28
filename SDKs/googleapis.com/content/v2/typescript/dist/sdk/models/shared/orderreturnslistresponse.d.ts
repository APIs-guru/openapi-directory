import { SpeakeasyBase } from "../../../internal/utils";
import { MerchantOrderReturn } from "./merchantorderreturn";
export declare class OrderreturnsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: MerchantOrderReturn[];
}
