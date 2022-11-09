import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementServicesSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceconsumermanagementServicesSearchQueryParams extends SpeakeasyBase {
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
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServiceconsumermanagementServicesSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementServicesSearchRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementServicesSearchPathParams;
    queryParams: ServiceconsumermanagementServicesSearchQueryParams;
    security: ServiceconsumermanagementServicesSearchSecurity;
}
export declare class ServiceconsumermanagementServicesSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchTenancyUnitsResponse?: shared.SearchTenancyUnitsResponse;
    statusCode: number;
}
