import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ConnectorsProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ConnectorsProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsListPathParams;
    queryParams: ConnectorsProjectsLocationsListQueryParams;
    security: ConnectorsProjectsLocationsListSecurity;
}
export declare class ConnectorsProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
