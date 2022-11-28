import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicyRule } from "./responsepolicyrule";
export declare class ResponsePolicyRulesListResponse extends SpeakeasyBase {
    header?: ResponseHeader;
    nextPageToken?: string;
    responsePolicyRules?: ResponsePolicyRule[];
}
