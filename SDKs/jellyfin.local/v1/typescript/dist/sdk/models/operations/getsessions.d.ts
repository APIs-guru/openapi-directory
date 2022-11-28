import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSessionsQueryParams extends SpeakeasyBase {
    activeWithinSeconds?: number;
    controllableByUserId?: string;
    deviceId?: string;
}
export declare class GetSessionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSessionsRequest extends SpeakeasyBase {
    queryParams: GetSessionsQueryParams;
    security: GetSessionsSecurity;
}
export declare class GetSessionsResponse extends SpeakeasyBase {
    contentType: string;
    sessionInfos?: shared.SessionInfo[];
    statusCode: number;
}
