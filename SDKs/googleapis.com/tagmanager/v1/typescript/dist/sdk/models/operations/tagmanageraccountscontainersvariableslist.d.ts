import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVariablesListPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersVariablesListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVariablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVariablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVariablesListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVariablesListSecurityOption1;
    option2?: TagmanagerAccountsContainersVariablesListSecurityOption2;
}
export declare class TagmanagerAccountsContainersVariablesListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVariablesListPathParams;
    queryParams: TagmanagerAccountsContainersVariablesListQueryParams;
    security: TagmanagerAccountsContainersVariablesListSecurity;
}
export declare class TagmanagerAccountsContainersVariablesListResponse extends SpeakeasyBase {
    contentType: string;
    listVariablesResponse?: shared.ListVariablesResponse;
    statusCode: number;
}
