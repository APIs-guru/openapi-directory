import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsOperationsGetPathParams;
    queryParams: RedisProjectsLocationsOperationsGetQueryParams;
    security: RedisProjectsLocationsOperationsGetSecurity;
}
export declare class RedisProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
