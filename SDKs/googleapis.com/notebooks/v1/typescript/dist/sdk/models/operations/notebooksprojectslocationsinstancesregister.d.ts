import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesRegisterPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsInstancesRegisterQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesRegisterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesRegisterRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesRegisterPathParams;
    queryParams: NotebooksProjectsLocationsInstancesRegisterQueryParams;
    request?: shared.RegisterInstanceRequest;
    security: NotebooksProjectsLocationsInstancesRegisterSecurity;
}
export declare class NotebooksProjectsLocationsInstancesRegisterResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
