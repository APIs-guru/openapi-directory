import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemotebuildexecutionProjectsInstancesTestNotifyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RemotebuildexecutionProjectsInstancesTestNotifyQueryParams extends SpeakeasyBase {
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
export declare class RemotebuildexecutionProjectsInstancesTestNotifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RemotebuildexecutionProjectsInstancesTestNotifyRequest extends SpeakeasyBase {
    pathParams: RemotebuildexecutionProjectsInstancesTestNotifyPathParams;
    queryParams: RemotebuildexecutionProjectsInstancesTestNotifyQueryParams;
    request?: Map<string, any>;
    security: RemotebuildexecutionProjectsInstancesTestNotifySecurity;
}
export declare class RemotebuildexecutionProjectsInstancesTestNotifyResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
