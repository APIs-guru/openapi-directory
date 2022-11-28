import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreatePathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateQueryParams;
    request?: shared.EntityInput;
    security: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    entity?: shared.Entity;
    statusCode: number;
}
