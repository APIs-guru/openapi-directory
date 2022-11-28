import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsProvidersConnectorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsListQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsProvidersConnectorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsProvidersConnectorsListPathParams;
    queryParams: ConnectorsProjectsLocationsProvidersConnectorsListQueryParams;
    security: ConnectorsProjectsLocationsProvidersConnectorsListSecurity;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectorsResponse?: shared.ListConnectorsResponse;
    statusCode: number;
}
