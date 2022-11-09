import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesRevertPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FileProjectsLocationsInstancesRevertQueryParams extends SpeakeasyBase {
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
export declare class FileProjectsLocationsInstancesRevertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesRevertRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesRevertPathParams;
    queryParams: FileProjectsLocationsInstancesRevertQueryParams;
    request?: shared.RevertInstanceRequest;
    security: FileProjectsLocationsInstancesRevertSecurity;
}
export declare class FileProjectsLocationsInstancesRevertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
