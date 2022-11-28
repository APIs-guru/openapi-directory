import { SpeakeasyBase } from "../../../internal/utils";
import { Binding } from "./binding";
import { Policy } from "./policy";
export declare class GlobalSetPolicyRequest extends SpeakeasyBase {
    bindings?: Binding[];
    etag?: string;
    policy?: Policy;
}
