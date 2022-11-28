import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    forceOnly?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams;
    security: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
