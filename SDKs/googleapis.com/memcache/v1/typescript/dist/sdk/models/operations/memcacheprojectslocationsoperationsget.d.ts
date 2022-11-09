import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MemcacheProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class MemcacheProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsOperationsGetPathParams;
    queryParams: MemcacheProjectsLocationsOperationsGetQueryParams;
    security: MemcacheProjectsLocationsOperationsGetSecurity;
}
export declare class MemcacheProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
