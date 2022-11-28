import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ZippedScreenshotsPathParams extends SpeakeasyBase {
    testId: string;
}
export declare class ZippedScreenshotsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ZippedScreenshotsRequest extends SpeakeasyBase {
    pathParams: ZippedScreenshotsPathParams;
    security: ZippedScreenshotsSecurity;
}
export declare class ZippedScreenshotsResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    forbidden?: any;
    statusCode: number;
    screenshotNotFound?: any;
    zippedScreenshotsSuccess?: shared.ZippedScreenshotsSuccess;
}
