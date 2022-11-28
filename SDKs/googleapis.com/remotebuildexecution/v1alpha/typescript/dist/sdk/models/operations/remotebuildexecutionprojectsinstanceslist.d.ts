import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemotebuildexecutionProjectsInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RemotebuildexecutionProjectsInstancesListQueryParams extends SpeakeasyBase {
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
export declare class RemotebuildexecutionProjectsInstancesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RemotebuildexecutionProjectsInstancesListRequest extends SpeakeasyBase {
    pathParams: RemotebuildexecutionProjectsInstancesListPathParams;
    queryParams: RemotebuildexecutionProjectsInstancesListQueryParams;
    security: RemotebuildexecutionProjectsInstancesListSecurity;
}
export declare class RemotebuildexecutionProjectsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    googleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse?: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse;
    statusCode: number;
}
