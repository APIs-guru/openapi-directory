import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams;
    request?: shared.ImportAdminOverridesRequest;
    security: ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
