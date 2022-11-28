import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopScreenshotsTestPathParams extends SpeakeasyBase {
    testId: string;
}
export declare class StopScreenshotsTestSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class StopScreenshotsTestRequest extends SpeakeasyBase {
    pathParams: StopScreenshotsTestPathParams;
    security: StopScreenshotsTestSecurity;
}
export declare class StopScreenshotsTestResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    forbidden?: any;
    statusCode: number;
    stopScreenshotNotFound?: any;
    stopScreenshotSuccess?: any;
}
