import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GameservicesProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GameservicesProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    includeUnrevealedLocations?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GameservicesProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GameservicesProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: GameservicesProjectsLocationsListPathParams;
    queryParams: GameservicesProjectsLocationsListQueryParams;
    security: GameservicesProjectsLocationsListSecurity;
}
export declare class GameservicesProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
