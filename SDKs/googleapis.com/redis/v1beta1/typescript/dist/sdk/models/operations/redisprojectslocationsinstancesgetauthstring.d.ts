import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsInstancesGetAuthStringPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsInstancesGetAuthStringQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsInstancesGetAuthStringSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsInstancesGetAuthStringRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsInstancesGetAuthStringPathParams;
    queryParams: RedisProjectsLocationsInstancesGetAuthStringQueryParams;
    security: RedisProjectsLocationsInstancesGetAuthStringSecurity;
}
export declare class RedisProjectsLocationsInstancesGetAuthStringResponse extends SpeakeasyBase {
    contentType: string;
    instanceAuthString?: shared.InstanceAuthString;
    statusCode: number;
}
