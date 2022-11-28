import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersSnippetPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersSnippetQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersSnippetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersSnippetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersSnippetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersSnippetSecurityOption1;
    option2?: TagmanagerAccountsContainersSnippetSecurityOption2;
}
export declare class TagmanagerAccountsContainersSnippetRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersSnippetPathParams;
    queryParams: TagmanagerAccountsContainersSnippetQueryParams;
    security: TagmanagerAccountsContainersSnippetSecurity;
}
export declare class TagmanagerAccountsContainersSnippetResponse extends SpeakeasyBase {
    contentType: string;
    getContainerSnippetResponse?: shared.GetContainerSnippetResponse;
    statusCode: number;
}
