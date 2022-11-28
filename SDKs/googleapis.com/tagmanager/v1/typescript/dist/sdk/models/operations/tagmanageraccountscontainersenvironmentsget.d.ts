import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersEnvironmentsGetPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    environmentId: string;
}
export declare class TagmanagerAccountsContainersEnvironmentsGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersEnvironmentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersEnvironmentsGetSecurityOption1;
    option2?: TagmanagerAccountsContainersEnvironmentsGetSecurityOption2;
}
export declare class TagmanagerAccountsContainersEnvironmentsGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersEnvironmentsGetPathParams;
    queryParams: TagmanagerAccountsContainersEnvironmentsGetQueryParams;
    security: TagmanagerAccountsContainersEnvironmentsGetSecurity;
}
export declare class TagmanagerAccountsContainersEnvironmentsGetResponse extends SpeakeasyBase {
    contentType: string;
    environment?: shared.Environment;
    statusCode: number;
}
