import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayPingRequests extends SpeakeasyBase {
    pingRequestDto?: shared.PingRequestDto;
    pingRequestDto1?: shared.PingRequestDto;
    pingRequestDto2?: shared.PingRequestDto;
}
export declare class SyncPlayPingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayPingRequest extends SpeakeasyBase {
    request: SyncPlayPingRequests;
    security: SyncPlayPingSecurity;
}
export declare class SyncPlayPingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
