import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GameservicesProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class GameservicesProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class GameservicesProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GameservicesProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: GameservicesProjectsLocationsOperationsDeletePathParams;
    queryParams: GameservicesProjectsLocationsOperationsDeleteQueryParams;
    security: GameservicesProjectsLocationsOperationsDeleteSecurity;
}
export declare class GameservicesProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
