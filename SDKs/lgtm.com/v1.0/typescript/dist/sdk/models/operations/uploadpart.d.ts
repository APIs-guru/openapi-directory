import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadPartPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class UploadPartRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    applicationZip: Uint8Array;
}
export declare class UploadPartSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class UploadPartRequest extends SpeakeasyBase {
    pathParams: UploadPartPathParams;
    request: UploadPartRequests;
    security: UploadPartSecurity;
}
export declare class UploadPartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
