import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AbortUploadPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class AbortUploadSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class AbortUploadRequest extends SpeakeasyBase {
    pathParams: AbortUploadPathParams;
    security: AbortUploadSecurity;
}
export declare class AbortUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    operation?: shared.Operation;
}
