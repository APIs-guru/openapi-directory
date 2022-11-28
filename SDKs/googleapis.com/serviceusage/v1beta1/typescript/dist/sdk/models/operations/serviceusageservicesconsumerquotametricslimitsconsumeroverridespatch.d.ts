import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    forceOnly?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams;
    request?: shared.QuotaOverride;
    security: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
