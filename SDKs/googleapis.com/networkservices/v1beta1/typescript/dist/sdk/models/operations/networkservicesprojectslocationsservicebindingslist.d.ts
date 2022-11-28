import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsServiceBindingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsListQueryParams extends SpeakeasyBase {
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
export declare class NetworkservicesProjectsLocationsServiceBindingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsListRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsServiceBindingsListPathParams;
    queryParams: NetworkservicesProjectsLocationsServiceBindingsListQueryParams;
    security: NetworkservicesProjectsLocationsServiceBindingsListSecurity;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsListResponse extends SpeakeasyBase {
    contentType: string;
    listServiceBindingsResponse?: shared.ListServiceBindingsResponse;
    statusCode: number;
}
