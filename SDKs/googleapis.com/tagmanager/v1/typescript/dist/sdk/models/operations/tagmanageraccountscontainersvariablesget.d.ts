import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVariablesGetPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    variableId: string;
}
export declare class TagmanagerAccountsContainersVariablesGetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVariablesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVariablesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVariablesGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVariablesGetSecurityOption1;
    option2?: TagmanagerAccountsContainersVariablesGetSecurityOption2;
}
export declare class TagmanagerAccountsContainersVariablesGetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVariablesGetPathParams;
    queryParams: TagmanagerAccountsContainersVariablesGetQueryParams;
    security: TagmanagerAccountsContainersVariablesGetSecurity;
}
export declare class TagmanagerAccountsContainersVariablesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variable?: shared.Variable;
}
