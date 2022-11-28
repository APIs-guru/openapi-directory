import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsInstancesImportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsInstancesImportQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsInstancesImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsInstancesImportRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsInstancesImportPathParams;
    queryParams: RedisProjectsLocationsInstancesImportQueryParams;
    request?: shared.ImportInstanceRequest;
    security: RedisProjectsLocationsInstancesImportSecurity;
}
export declare class RedisProjectsLocationsInstancesImportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
