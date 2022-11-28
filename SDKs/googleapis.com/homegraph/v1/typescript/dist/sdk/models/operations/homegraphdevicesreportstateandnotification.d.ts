import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HomegraphDevicesReportStateAndNotificationQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HomegraphDevicesReportStateAndNotificationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HomegraphDevicesReportStateAndNotificationRequest extends SpeakeasyBase {
    queryParams: HomegraphDevicesReportStateAndNotificationQueryParams;
    request?: shared.ReportStateAndNotificationRequest;
    security: HomegraphDevicesReportStateAndNotificationSecurity;
}
export declare class HomegraphDevicesReportStateAndNotificationResponse extends SpeakeasyBase {
    contentType: string;
    reportStateAndNotificationResponse?: shared.ReportStateAndNotificationResponse;
    statusCode: number;
}
