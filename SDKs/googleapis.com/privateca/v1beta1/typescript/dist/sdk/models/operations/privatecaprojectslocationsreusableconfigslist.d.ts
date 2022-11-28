import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsReusableConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsReusableConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsReusableConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsReusableConfigsListRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsReusableConfigsListPathParams;
    queryParams: PrivatecaProjectsLocationsReusableConfigsListQueryParams;
    security: PrivatecaProjectsLocationsReusableConfigsListSecurity;
}
export declare class PrivatecaProjectsLocationsReusableConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listReusableConfigsResponse?: shared.ListReusableConfigsResponse;
    statusCode: number;
}
