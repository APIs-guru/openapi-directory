import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MemcacheProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class MemcacheProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsOperationsCancelPathParams;
    queryParams: MemcacheProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: MemcacheProjectsLocationsOperationsCancelSecurity;
}
export declare class MemcacheProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
