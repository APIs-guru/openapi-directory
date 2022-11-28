import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringUptimeCheckIpsListQueryParams extends SpeakeasyBase {
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
export declare class MonitoringUptimeCheckIpsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringUptimeCheckIpsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringUptimeCheckIpsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringUptimeCheckIpsListSecurity extends SpeakeasyBase {
    option1?: MonitoringUptimeCheckIpsListSecurityOption1;
    option2?: MonitoringUptimeCheckIpsListSecurityOption2;
    option3?: MonitoringUptimeCheckIpsListSecurityOption3;
}
export declare class MonitoringUptimeCheckIpsListRequest extends SpeakeasyBase {
    queryParams: MonitoringUptimeCheckIpsListQueryParams;
    security: MonitoringUptimeCheckIpsListSecurity;
}
export declare class MonitoringUptimeCheckIpsListResponse extends SpeakeasyBase {
    contentType: string;
    listUptimeCheckIpsResponse?: shared.ListUptimeCheckIpsResponse;
    statusCode: number;
}
