import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FileProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class FileProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsOperationsGetPathParams;
    queryParams: FileProjectsLocationsOperationsGetQueryParams;
    security: FileProjectsLocationsOperationsGetSecurity;
}
export declare class FileProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
