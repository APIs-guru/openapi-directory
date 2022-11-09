import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsInstancesExportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsInstancesExportQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsInstancesExportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsInstancesExportRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsInstancesExportPathParams;
    queryParams: RedisProjectsLocationsInstancesExportQueryParams;
    request?: shared.ExportInstanceRequest;
    security: RedisProjectsLocationsInstancesExportSecurity;
}
export declare class RedisProjectsLocationsInstancesExportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
