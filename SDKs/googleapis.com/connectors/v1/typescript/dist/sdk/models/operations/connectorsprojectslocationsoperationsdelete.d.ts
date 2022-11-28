import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ConnectorsProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsOperationsDeletePathParams;
    queryParams: ConnectorsProjectsLocationsOperationsDeleteQueryParams;
    security: ConnectorsProjectsLocationsOperationsDeleteSecurity;
}
export declare class ConnectorsProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
