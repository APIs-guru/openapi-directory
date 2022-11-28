import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersFoldersUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    folderId: string;
}
export declare class TagmanagerAccountsContainersFoldersUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fingerprint?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersFoldersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersFoldersUpdatePathParams;
    queryParams: TagmanagerAccountsContainersFoldersUpdateQueryParams;
    request?: shared.Folder;
    security: TagmanagerAccountsContainersFoldersUpdateSecurity;
}
export declare class TagmanagerAccountsContainersFoldersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
