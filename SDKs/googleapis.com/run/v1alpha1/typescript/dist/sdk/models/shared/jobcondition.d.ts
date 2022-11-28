import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JobCondition defines a readiness condition for a Revision.
**/
export declare class JobCondition extends SpeakeasyBase {
    lastTransitionTime?: string;
    message?: string;
    reason?: string;
    severity?: string;
    status?: string;
    type?: string;
}
