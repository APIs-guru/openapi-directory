import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams;
    security: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse extends SpeakeasyBase {
    contentType: string;
    listConsumerOverridesResponse?: shared.ListConsumerOverridesResponse;
    statusCode: number;
}
