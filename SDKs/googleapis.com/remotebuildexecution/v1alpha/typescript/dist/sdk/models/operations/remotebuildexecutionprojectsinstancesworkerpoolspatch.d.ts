import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    loggingEnabled?: boolean;
    name1?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest extends SpeakeasyBase {
    pathParams: RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams;
    queryParams: RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams;
    request?: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest;
    security: RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
