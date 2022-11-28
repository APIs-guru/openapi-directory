import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemotebuildexecutionProjectsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RemotebuildexecutionProjectsInstancesCreateQueryParams extends SpeakeasyBase {
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
export declare class RemotebuildexecutionProjectsInstancesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RemotebuildexecutionProjectsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: RemotebuildexecutionProjectsInstancesCreatePathParams;
    queryParams: RemotebuildexecutionProjectsInstancesCreateQueryParams;
    request?: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest;
    security: RemotebuildexecutionProjectsInstancesCreateSecurity;
}
export declare class RemotebuildexecutionProjectsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
