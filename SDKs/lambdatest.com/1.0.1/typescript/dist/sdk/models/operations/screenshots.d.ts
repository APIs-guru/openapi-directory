import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScreenshotsPathParams extends SpeakeasyBase {
    testId: string;
}
export declare class ScreenshotsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ScreenshotsRequest extends SpeakeasyBase {
    pathParams: ScreenshotsPathParams;
    security: ScreenshotsSecurity;
}
export declare class ScreenshotsResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    forbidden?: any;
    statusCode: number;
    screenshotDetails?: shared.ScreenshotDetails;
    screenshotNotFound?: any;
}
