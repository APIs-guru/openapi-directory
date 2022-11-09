import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsOperationsDeletePathParams;
    queryParams: RedisProjectsLocationsOperationsDeleteQueryParams;
    security: RedisProjectsLocationsOperationsDeleteSecurity;
}
export declare class RedisProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
