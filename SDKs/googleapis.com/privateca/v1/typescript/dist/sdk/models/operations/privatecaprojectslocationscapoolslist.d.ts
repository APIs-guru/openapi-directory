import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsListQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCaPoolsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsListRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsListPathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsListQueryParams;
    security: PrivatecaProjectsLocationsCaPoolsListSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsListResponse extends SpeakeasyBase {
    contentType: string;
    listCaPoolsResponse?: shared.ListCaPoolsResponse;
    statusCode: number;
}
