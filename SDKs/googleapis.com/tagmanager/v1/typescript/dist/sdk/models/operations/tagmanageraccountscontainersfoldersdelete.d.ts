import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersFoldersDeletePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    folderId: string;
}
export declare class TagmanagerAccountsContainersFoldersDeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersFoldersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersFoldersDeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersFoldersDeletePathParams;
    queryParams: TagmanagerAccountsContainersFoldersDeleteQueryParams;
    security: TagmanagerAccountsContainersFoldersDeleteSecurity;
}
export declare class TagmanagerAccountsContainersFoldersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
