import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesRestorePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FileProjectsLocationsInstancesRestoreQueryParams extends SpeakeasyBase {
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
export declare class FileProjectsLocationsInstancesRestoreSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesRestoreRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesRestorePathParams;
    queryParams: FileProjectsLocationsInstancesRestoreQueryParams;
    request?: shared.RestoreInstanceRequest;
    security: FileProjectsLocationsInstancesRestoreSecurity;
}
export declare class FileProjectsLocationsInstancesRestoreResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
