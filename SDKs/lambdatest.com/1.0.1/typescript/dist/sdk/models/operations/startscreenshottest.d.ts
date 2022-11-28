import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartScreenshotTestSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class StartScreenshotTestRequest extends SpeakeasyBase {
    request: shared.ScreenshotPayload;
    security: StartScreenshotTestSecurity;
}
export declare class StartScreenshotTestResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    forbidden?: any;
    statusCode: number;
    startScreenshotBadRequest?: shared.StartScreenshotBadRequest;
    startScreenshotSuccess?: shared.StartScreenshotSuccess;
}
