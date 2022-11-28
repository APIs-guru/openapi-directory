import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordingPathParams extends SpeakeasyBase {
    recordingId: string;
}
export declare class GetRecordingQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetRecordingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRecordingRequest extends SpeakeasyBase {
    pathParams: GetRecordingPathParams;
    queryParams: GetRecordingQueryParams;
    security: GetRecordingSecurity;
}
export declare class GetRecordingResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
