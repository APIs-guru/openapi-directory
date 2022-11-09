import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
/**
 * Associates `members`, or principals, with a `role`.
**/
export declare class GoogleIamV1Binding extends SpeakeasyBase {
    condition?: GoogleTypeExpr;
    members?: string[];
    role?: string;
}
