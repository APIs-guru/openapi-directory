import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Expr } from "./expr";
/**
 * Associates `members`, or principals, with a `role`.
**/
export declare class GoogleIamV1Binding extends SpeakeasyBase {
    condition?: Expr;
    members?: string[];
    role?: string;
}
