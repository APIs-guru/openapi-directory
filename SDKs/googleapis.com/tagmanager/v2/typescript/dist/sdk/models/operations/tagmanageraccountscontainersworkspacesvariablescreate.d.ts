import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams;
    request?: shared.Variable;
    security: TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesVariablesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variable?: shared.Variable;
}
