import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams extends SpeakeasyBase {
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
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest extends SpeakeasyBase {
    pathParams: RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams;
    queryParams: RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams;
    request?: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest;
    security: RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
