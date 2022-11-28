import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersLookupQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    destinationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersLookupSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersLookupSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersLookupSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersLookupSecurityOption1;
    option2?: TagmanagerAccountsContainersLookupSecurityOption2;
}
export declare class TagmanagerAccountsContainersLookupRequest extends SpeakeasyBase {
    queryParams: TagmanagerAccountsContainersLookupQueryParams;
    security: TagmanagerAccountsContainersLookupSecurity;
}
export declare class TagmanagerAccountsContainersLookupResponse extends SpeakeasyBase {
    container?: shared.Container;
    contentType: string;
    statusCode: number;
}
