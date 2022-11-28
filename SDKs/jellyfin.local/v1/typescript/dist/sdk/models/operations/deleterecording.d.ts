import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRecordingPathParams extends SpeakeasyBase {
    recordingId: string;
}
export declare class DeleteRecordingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteRecordingRequest extends SpeakeasyBase {
    pathParams: DeleteRecordingPathParams;
    security: DeleteRecordingSecurity;
}
export declare class DeleteRecordingResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
