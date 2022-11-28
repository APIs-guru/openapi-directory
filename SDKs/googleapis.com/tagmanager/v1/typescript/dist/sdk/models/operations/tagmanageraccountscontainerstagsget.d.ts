import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTagsGetPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    tagId: string;
}
export declare class TagmanagerAccountsContainersTagsGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTagsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTagsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTagsGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersTagsGetSecurityOption1;
    option2?: TagmanagerAccountsContainersTagsGetSecurityOption2;
}
export declare class TagmanagerAccountsContainersTagsGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTagsGetPathParams;
    queryParams: TagmanagerAccountsContainersTagsGetQueryParams;
    security: TagmanagerAccountsContainersTagsGetSecurity;
}
export declare class TagmanagerAccountsContainersTagsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
