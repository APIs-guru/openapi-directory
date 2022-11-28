import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringServicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringServicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringServicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesListSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesListSecurityOption1;
    option2?: MonitoringServicesListSecurityOption2;
    option3?: MonitoringServicesListSecurityOption3;
}
export declare class MonitoringServicesListRequest extends SpeakeasyBase {
    pathParams: MonitoringServicesListPathParams;
    queryParams: MonitoringServicesListQueryParams;
    security: MonitoringServicesListSecurity;
}
export declare class MonitoringServicesListResponse extends SpeakeasyBase {
    contentType: string;
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
}
