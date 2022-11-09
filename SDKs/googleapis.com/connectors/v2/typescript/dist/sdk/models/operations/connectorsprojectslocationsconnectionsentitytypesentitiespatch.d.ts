import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams;
    request?: shared.Entity;
    security: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse extends SpeakeasyBase {
    contentType: string;
    entity?: shared.Entity;
    statusCode: number;
}
