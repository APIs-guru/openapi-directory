import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
/**
 * Associates `members` with a `role`.
**/
export declare class GoogleIamV1Binding extends SpeakeasyBase {
    condition?: GoogleTypeExpr;
    members?: string[];
    role?: string;
}
