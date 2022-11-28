import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsGetPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    containerVersionId: string;
}
export declare class TagmanagerAccountsContainersVersionsGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVersionsGetSecurityOption1;
    option2?: TagmanagerAccountsContainersVersionsGetSecurityOption2;
    option3?: TagmanagerAccountsContainersVersionsGetSecurityOption3;
}
export declare class TagmanagerAccountsContainersVersionsGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsGetPathParams;
    queryParams: TagmanagerAccountsContainersVersionsGetQueryParams;
    security: TagmanagerAccountsContainersVersionsGetSecurity;
}
export declare class TagmanagerAccountsContainersVersionsGetResponse extends SpeakeasyBase {
    containerVersion?: shared.ContainerVersion;
    contentType: string;
    statusCode: number;
}
