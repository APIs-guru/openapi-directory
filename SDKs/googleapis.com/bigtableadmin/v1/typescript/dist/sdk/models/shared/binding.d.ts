import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
/**
 * Associates `members` with a `role`.
**/
export declare class Binding extends SpeakeasyBase {
    condition?: Expr;
    members?: string[];
    role?: string;
}
