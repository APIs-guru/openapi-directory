import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Binding } from "./binding";
import { Policy } from "./policy";
export declare class GlobalSetPolicyRequest extends SpeakeasyBase {
    bindings?: Binding[];
    etag?: string;
    policy?: Policy;
}
