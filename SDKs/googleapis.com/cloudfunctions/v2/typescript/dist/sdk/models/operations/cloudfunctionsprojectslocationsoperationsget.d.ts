import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudfunctionsProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsOperationsGetPathParams;
    queryParams: CloudfunctionsProjectsLocationsOperationsGetQueryParams;
    security: CloudfunctionsProjectsLocationsOperationsGetSecurity;
}
export declare class CloudfunctionsProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
