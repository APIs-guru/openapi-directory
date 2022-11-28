import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams;
    security: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse extends SpeakeasyBase {
    contentType: string;
    listAdminOverridesResponse?: shared.ListAdminOverridesResponse;
    statusCode: number;
}
