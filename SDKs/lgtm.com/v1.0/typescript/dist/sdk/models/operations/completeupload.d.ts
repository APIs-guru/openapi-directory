import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteUploadPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class CompleteUploadSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class CompleteUploadRequest extends SpeakeasyBase {
    pathParams: CompleteUploadPathParams;
    security: CompleteUploadSecurity;
}
export declare class CompleteUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    operation?: shared.Operation;
}
