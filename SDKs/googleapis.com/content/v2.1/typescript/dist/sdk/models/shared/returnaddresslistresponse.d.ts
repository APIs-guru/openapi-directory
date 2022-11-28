import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";
export declare class ReturnaddressListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: ReturnAddress[];
}
