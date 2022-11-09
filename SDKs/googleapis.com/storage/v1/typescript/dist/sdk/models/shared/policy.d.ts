import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Expr } from "./expr";
export declare class PolicyBindings extends SpeakeasyBase {
    condition?: Expr;
    members?: string[];
    role?: string;
}
/**
 * A bucket/object IAM policy.
**/
export declare class Policy extends SpeakeasyBase {
    bindings?: PolicyBindings[];
    etag?: string;
    kind?: string;
    resourceId?: string;
    version?: number;
}
