import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetQueryParams;
    security: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    entity?: shared.Entity;
    statusCode: number;
}
