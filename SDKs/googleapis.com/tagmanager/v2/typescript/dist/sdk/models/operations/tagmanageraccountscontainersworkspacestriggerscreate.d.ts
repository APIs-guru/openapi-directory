import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams;
    request?: shared.Trigger;
    security: TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesTriggersCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trigger?: shared.Trigger;
}
