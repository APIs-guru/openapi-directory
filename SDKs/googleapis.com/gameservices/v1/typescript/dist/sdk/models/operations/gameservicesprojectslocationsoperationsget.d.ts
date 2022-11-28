import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GameservicesProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GameservicesProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class GameservicesProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GameservicesProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: GameservicesProjectsLocationsOperationsGetPathParams;
    queryParams: GameservicesProjectsLocationsOperationsGetQueryParams;
    security: GameservicesProjectsLocationsOperationsGetSecurity;
}
export declare class GameservicesProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
