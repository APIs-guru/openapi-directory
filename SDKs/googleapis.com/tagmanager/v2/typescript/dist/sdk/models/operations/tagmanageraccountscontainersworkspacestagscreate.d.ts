import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesTagsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesTagsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesTagsCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesTagsCreateQueryParams;
    request?: shared.Tag;
    security: TagmanagerAccountsContainersWorkspacesTagsCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesTagsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
