import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FileProjectsLocationsInstancesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    instanceId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FileProjectsLocationsInstancesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesCreatePathParams;
    queryParams: FileProjectsLocationsInstancesCreateQueryParams;
    request?: shared.Instance;
    security: FileProjectsLocationsInstancesCreateSecurity;
}
export declare class FileProjectsLocationsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
