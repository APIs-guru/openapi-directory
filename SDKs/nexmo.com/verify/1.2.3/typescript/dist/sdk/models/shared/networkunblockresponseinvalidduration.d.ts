import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class NetworkUnblockResponseInvalidDurationInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid Duration
**/
export declare class NetworkUnblockResponseInvalidDuration extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    invalidParameters?: NetworkUnblockResponseInvalidDurationInvalidParameters[];
    title?: string;
    type?: string;
}
