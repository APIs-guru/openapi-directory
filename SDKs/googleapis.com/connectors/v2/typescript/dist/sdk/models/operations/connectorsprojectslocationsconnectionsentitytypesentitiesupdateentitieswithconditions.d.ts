import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsPathParams extends SpeakeasyBase {
    entityType: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    conditions?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsQueryParams;
    request?: shared.EntityInput;
    security: ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateEntitiesWithConditionsResponse?: shared.UpdateEntitiesWithConditionsResponse;
}
