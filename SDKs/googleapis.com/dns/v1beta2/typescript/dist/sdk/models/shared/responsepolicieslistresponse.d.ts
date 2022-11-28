import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicy } from "./responsepolicy";
export declare class ResponsePoliciesListResponse extends SpeakeasyBase {
    header?: ResponseHeader;
    nextPageToken?: string;
    responsePolicies?: ResponsePolicy[];
}
