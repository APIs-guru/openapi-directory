import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GameservicesProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GameservicesProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class GameservicesProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GameservicesProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: GameservicesProjectsLocationsOperationsCancelPathParams;
    queryParams: GameservicesProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: GameservicesProjectsLocationsOperationsCancelSecurity;
}
export declare class GameservicesProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
