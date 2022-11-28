import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersGetPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersGetSecurityOption1;
    option2?: TagmanagerAccountsContainersGetSecurityOption2;
}
export declare class TagmanagerAccountsContainersGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersGetPathParams;
    queryParams: TagmanagerAccountsContainersGetQueryParams;
    security: TagmanagerAccountsContainersGetSecurity;
}
export declare class TagmanagerAccountsContainersGetResponse extends SpeakeasyBase {
    container?: shared.Container;
    contentType: string;
    statusCode: number;
}
