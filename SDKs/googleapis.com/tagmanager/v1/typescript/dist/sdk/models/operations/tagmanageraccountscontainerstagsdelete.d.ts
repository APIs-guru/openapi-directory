import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTagsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    tagId: string;
}
export declare class TagmanagerAccountsContainersTagsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTagsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTagsDeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTagsDeletePathParams;
    queryParams: TagmanagerAccountsContainersTagsDeleteQueryParams;
    security: TagmanagerAccountsContainersTagsDeleteSecurity;
}
export declare class TagmanagerAccountsContainersTagsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
