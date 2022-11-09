import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the policy in case of function's execution failure. If empty, then defaults to ignoring failures (i.e. not retrying them).
**/
export declare class FailurePolicy extends SpeakeasyBase {
    retry?: Map<string, any>;
}
