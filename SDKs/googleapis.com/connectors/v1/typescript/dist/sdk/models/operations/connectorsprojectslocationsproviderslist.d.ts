import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsProvidersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsProvidersListQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsProvidersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsProvidersListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsProvidersListPathParams;
    queryParams: ConnectorsProjectsLocationsProvidersListQueryParams;
    security: ConnectorsProjectsLocationsProvidersListSecurity;
}
export declare class ConnectorsProjectsLocationsProvidersListResponse extends SpeakeasyBase {
    contentType: string;
    listProvidersResponse?: shared.ListProvidersResponse;
    statusCode: number;
}
