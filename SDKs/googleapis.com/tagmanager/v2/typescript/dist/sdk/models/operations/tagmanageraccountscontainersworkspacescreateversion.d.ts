import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesCreateVersionPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesCreateVersionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesCreateVersionRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesCreateVersionPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams;
    request?: shared.CreateContainerVersionRequestVersionOptions;
    security: TagmanagerAccountsContainersWorkspacesCreateVersionSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesCreateVersionResponse extends SpeakeasyBase {
    contentType: string;
    createContainerVersionResponse?: shared.CreateContainerVersionResponse;
    statusCode: number;
}
