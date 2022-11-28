import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1Condition } from "./googleidentityaccesscontextmanagerv1condition";
export declare enum GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum {
    And = "AND",
    Or = "OR"
}
/**
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
export declare class GoogleIdentityAccesscontextmanagerV1BasicLevel extends SpeakeasyBase {
    combiningFunction?: GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum;
    conditions?: GoogleIdentityAccesscontextmanagerV1Condition[];
}
