import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsHttpRoutesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsHttpRoutesListQueryParams extends SpeakeasyBase {
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
export declare class NetworkservicesProjectsLocationsHttpRoutesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsHttpRoutesListRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsHttpRoutesListPathParams;
    queryParams: NetworkservicesProjectsLocationsHttpRoutesListQueryParams;
    security: NetworkservicesProjectsLocationsHttpRoutesListSecurity;
}
export declare class NetworkservicesProjectsLocationsHttpRoutesListResponse extends SpeakeasyBase {
    contentType: string;
    listHttpRoutesResponse?: shared.ListHttpRoutesResponse;
    statusCode: number;
}
