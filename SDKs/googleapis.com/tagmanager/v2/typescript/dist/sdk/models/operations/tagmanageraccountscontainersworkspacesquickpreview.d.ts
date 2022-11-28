import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesQuickPreviewRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams;
    security: TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesQuickPreviewResponse extends SpeakeasyBase {
    contentType: string;
    quickPreviewResponse?: shared.QuickPreviewResponse;
    statusCode: number;
}
