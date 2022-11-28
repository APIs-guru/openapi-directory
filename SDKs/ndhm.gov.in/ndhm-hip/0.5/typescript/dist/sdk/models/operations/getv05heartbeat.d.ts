import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetV05HeartbeatServerList: readonly ["https://your-hrp-server.com"];
export declare class GetV05HeartbeatRequest extends SpeakeasyBase {
    serverUrl?: string;
}
export declare class GetV05HeartbeatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    heartbeatResponse?: shared.HeartbeatResponse;
    statusCode: number;
}
