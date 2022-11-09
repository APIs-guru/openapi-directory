import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsExecuteSqlQueryPathParams extends SpeakeasyBase {
    connection: string;
}
export declare class ConnectorsProjectsLocationsConnectionsExecuteSqlQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsExecuteSqlQueryPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsExecuteSqlQueryQueryParams;
    request?: shared.ExecuteSqlQueryRequest;
    security: ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse extends SpeakeasyBase {
    contentType: string;
    executeSqlQueryResponse?: shared.ExecuteSqlQueryResponse;
    statusCode: number;
}
