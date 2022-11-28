import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionHeadersLatestPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersVersionHeadersLatestQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionHeadersLatestSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1;
    option2?: TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2;
}
export declare class TagmanagerAccountsContainersVersionHeadersLatestRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionHeadersLatestPathParams;
    queryParams: TagmanagerAccountsContainersVersionHeadersLatestQueryParams;
    security: TagmanagerAccountsContainersVersionHeadersLatestSecurity;
}
export declare class TagmanagerAccountsContainersVersionHeadersLatestResponse extends SpeakeasyBase {
    containerVersionHeader?: shared.ContainerVersionHeader;
    contentType: string;
    statusCode: number;
}
