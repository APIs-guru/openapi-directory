import { SpeakeasyBase } from "../../../internal/utils";
export declare class NetworkUnblockResponseUnprocessableNetworkInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid Network
**/
export declare class NetworkUnblockResponseUnprocessableNetwork extends SpeakeasyBase {
    detail?: string;
    instance?: string;
    invalidParameters?: NetworkUnblockResponseUnprocessableNetworkInvalidParameters[];
    title?: string;
    type?: string;
}
