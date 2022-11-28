import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    forceOnly?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams;
    request?: shared.QuotaOverride;
    security: ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
