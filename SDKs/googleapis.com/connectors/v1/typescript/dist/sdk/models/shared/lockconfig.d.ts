import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines whether or no a connection is locked. If locked, a reason must be specified.
**/
export declare class LockConfig extends SpeakeasyBase {
    locked?: boolean;
    reason?: string;
}
