import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { Policy } from "./policy";
export declare class PoliciesListResponse extends SpeakeasyBase {
    header?: ResponseHeader;
    kind?: string;
    nextPageToken?: string;
    policies?: Policy[];
}
