import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NetworkUnblockRequest extends SpeakeasyBase {
    request: shared.NetworkUnblock;
}
export declare class NetworkUnblockResponse extends SpeakeasyBase {
    contentType: string;
    errorThrottled?: shared.ErrorThrottled;
    statusCode: number;
    networkUnblockResponseForbidden?: shared.NetworkUnblockResponseForbidden;
    networkUnblockResponseNotFound?: shared.NetworkUnblockResponseNotFound;
    networkUnblockResponseOk?: shared.NetworkUnblockResponseOk;
    networkUnblock422ApplicationJsonOneOf?: any;
}
