import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV05HeartbeatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    heartbeatResponse?: shared.HeartbeatResponse;
    statusCode: number;
}
