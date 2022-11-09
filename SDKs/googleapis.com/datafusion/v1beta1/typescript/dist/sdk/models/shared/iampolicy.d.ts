import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";
import { Status } from "./status";
/**
 * IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.
**/
export declare class IamPolicy extends SpeakeasyBase {
    policy?: Policy;
    status?: Status;
}
