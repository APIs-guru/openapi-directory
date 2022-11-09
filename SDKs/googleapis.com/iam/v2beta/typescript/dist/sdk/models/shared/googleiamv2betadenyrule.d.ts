import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeExpr } from "./googletypeexpr";
/**
 * A deny rule in an IAM deny policy.
**/
export declare class GoogleIamV2betaDenyRule extends SpeakeasyBase {
    denialCondition?: GoogleTypeExpr;
    deniedPermissions?: string[];
    deniedPrincipals?: string[];
    exceptionPermissions?: string[];
    exceptionPrincipals?: string[];
}
