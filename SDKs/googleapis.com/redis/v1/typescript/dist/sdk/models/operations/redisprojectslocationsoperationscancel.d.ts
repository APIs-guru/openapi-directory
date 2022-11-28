import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsOperationsCancelPathParams;
    queryParams: RedisProjectsLocationsOperationsCancelQueryParams;
    security: RedisProjectsLocationsOperationsCancelSecurity;
}
export declare class RedisProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
