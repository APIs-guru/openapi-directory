import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    forceOnly?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams;
    request?: shared.QuotaOverride;
    security: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
