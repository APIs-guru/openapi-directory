import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesClientsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesClientsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesClientsCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesClientsCreateQueryParams;
    request?: shared.Client;
    security: TagmanagerAccountsContainersWorkspacesClientsCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesClientsCreateResponse extends SpeakeasyBase {
    client?: shared.Client;
    contentType: string;
    statusCode: number;
}
