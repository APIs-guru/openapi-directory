import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsInstancesFailoverPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsInstancesFailoverQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsInstancesFailoverSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsInstancesFailoverRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsInstancesFailoverPathParams;
    queryParams: RedisProjectsLocationsInstancesFailoverQueryParams;
    request?: shared.FailoverInstanceRequest;
    security: RedisProjectsLocationsInstancesFailoverSecurity;
}
export declare class RedisProjectsLocationsInstancesFailoverResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
