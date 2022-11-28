import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesConsumerQuotaMetricsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ServiceusageServicesConsumerQuotaMetricsListViewEnum {
    QuotaViewUnspecified = "QUOTA_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ServiceusageServicesConsumerQuotaMetricsListQueryParams extends SpeakeasyBase {
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
    view?: ServiceusageServicesConsumerQuotaMetricsListViewEnum;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesConsumerQuotaMetricsListSecurityOption1;
    option2?: ServiceusageServicesConsumerQuotaMetricsListSecurityOption2;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesConsumerQuotaMetricsListPathParams;
    queryParams: ServiceusageServicesConsumerQuotaMetricsListQueryParams;
    security: ServiceusageServicesConsumerQuotaMetricsListSecurity;
}
export declare class ServiceusageServicesConsumerQuotaMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    listConsumerQuotaMetricsResponse?: shared.ListConsumerQuotaMetricsResponse;
    statusCode: number;
}
