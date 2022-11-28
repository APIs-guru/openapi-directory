import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesListQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsEntityTypesListPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsEntityTypesListQueryParams;
    security: ConnectorsProjectsLocationsConnectionsEntityTypesListSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesListResponse extends SpeakeasyBase {
    contentType: string;
    listEntityTypesResponse?: shared.ListEntityTypesResponse;
    statusCode: number;
}
