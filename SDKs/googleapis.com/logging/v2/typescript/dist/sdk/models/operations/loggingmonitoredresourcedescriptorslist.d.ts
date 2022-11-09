import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingMonitoredResourceDescriptorsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingMonitoredResourceDescriptorsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingMonitoredResourceDescriptorsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingMonitoredResourceDescriptorsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingMonitoredResourceDescriptorsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingMonitoredResourceDescriptorsListSecurity extends SpeakeasyBase {
    option1?: LoggingMonitoredResourceDescriptorsListSecurityOption1;
    option2?: LoggingMonitoredResourceDescriptorsListSecurityOption2;
    option3?: LoggingMonitoredResourceDescriptorsListSecurityOption3;
    option4?: LoggingMonitoredResourceDescriptorsListSecurityOption4;
}
export declare class LoggingMonitoredResourceDescriptorsListRequest extends SpeakeasyBase {
    queryParams: LoggingMonitoredResourceDescriptorsListQueryParams;
    security: LoggingMonitoredResourceDescriptorsListSecurity;
}
export declare class LoggingMonitoredResourceDescriptorsListResponse extends SpeakeasyBase {
    contentType: string;
    listMonitoredResourceDescriptorsResponse?: shared.ListMonitoredResourceDescriptorsResponse;
    statusCode: number;
}
