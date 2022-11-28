import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTriggersGetPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    triggerId: string;
}
export declare class TagmanagerAccountsContainersTriggersGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTriggersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTriggersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTriggersGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersTriggersGetSecurityOption1;
    option2?: TagmanagerAccountsContainersTriggersGetSecurityOption2;
}
export declare class TagmanagerAccountsContainersTriggersGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTriggersGetPathParams;
    queryParams: TagmanagerAccountsContainersTriggersGetQueryParams;
    security: TagmanagerAccountsContainersTriggersGetSecurity;
}
export declare class TagmanagerAccountsContainersTriggersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trigger?: shared.Trigger;
}
