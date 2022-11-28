import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesTemplatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesTemplatesCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesTemplatesCreateQueryParams;
    request?: shared.CustomTemplate;
    security: TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    customTemplate?: shared.CustomTemplate;
    statusCode: number;
}
