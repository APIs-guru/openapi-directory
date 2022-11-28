import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    conditions?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sortBy?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListQueryParams;
    security: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse extends SpeakeasyBase {
    contentType: string;
    listEntitiesResponse?: shared.ListEntitiesResponse;
    statusCode: number;
}
