import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams extends SpeakeasyBase {
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
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams;
    request?: shared.ImportConsumerOverridesRequest;
    security: ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
