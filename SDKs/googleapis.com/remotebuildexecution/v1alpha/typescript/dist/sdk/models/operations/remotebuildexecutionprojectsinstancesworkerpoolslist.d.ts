import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest extends SpeakeasyBase {
    pathParams: RemotebuildexecutionProjectsInstancesWorkerpoolsListPathParams;
    queryParams: RemotebuildexecutionProjectsInstancesWorkerpoolsListQueryParams;
    security: RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity;
}
export declare class RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse extends SpeakeasyBase {
    contentType: string;
    googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse?: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse;
    statusCode: number;
}
