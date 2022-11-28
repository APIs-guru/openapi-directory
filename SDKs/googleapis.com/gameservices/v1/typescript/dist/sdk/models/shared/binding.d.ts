import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
/**
 * Associates `members`, or principals, with a `role`.
**/
export declare class Binding extends SpeakeasyBase {
    bindingId?: string;
    condition?: Expr;
    members?: string[];
    role?: string;
}
