import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { Policy } from "./policy";
export declare class PoliciesUpdateResponse extends SpeakeasyBase {
    header?: ResponseHeader;
    policy?: Policy;
}
