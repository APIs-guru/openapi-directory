import { SpeakeasyBase } from "../../../internal/utils";
import { Permissions } from "./permissions";
/**
 * Explanation about the IAM policy search result.
**/
export declare class Explanation extends SpeakeasyBase {
    matchedPermissions?: Map<string, Permissions>;
}
