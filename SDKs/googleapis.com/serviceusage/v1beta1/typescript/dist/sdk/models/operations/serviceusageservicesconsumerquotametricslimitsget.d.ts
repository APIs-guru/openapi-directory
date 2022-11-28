import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum {
    QuotaViewUnspecified = "QUOTA_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetQueryParams extends SpeakeasyBase {
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
    view?: ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsGetPathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsGetQueryParams;
    security: ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse extends SpeakeasyBase {
    consumerQuotaLimit?: shared.ConsumerQuotaLimit;
    contentType: string;
    statusCode: number;
}
