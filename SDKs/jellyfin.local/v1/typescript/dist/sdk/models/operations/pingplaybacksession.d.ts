import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PingPlaybackSessionQueryParams extends SpeakeasyBase {
    playSessionId?: string;
}
export declare class PingPlaybackSessionSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PingPlaybackSessionRequest extends SpeakeasyBase {
    queryParams: PingPlaybackSessionQueryParams;
    security: PingPlaybackSessionSecurity;
}
export declare class PingPlaybackSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
