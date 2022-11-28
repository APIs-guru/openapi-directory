import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsLivePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersVersionsLiveQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsLiveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsLiveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsLiveSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVersionsLiveSecurityOption1;
    option2?: TagmanagerAccountsContainersVersionsLiveSecurityOption2;
}
export declare class TagmanagerAccountsContainersVersionsLiveRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsLivePathParams;
    queryParams: TagmanagerAccountsContainersVersionsLiveQueryParams;
    security: TagmanagerAccountsContainersVersionsLiveSecurity;
}
export declare class TagmanagerAccountsContainersVersionsLiveResponse extends SpeakeasyBase {
    containerVersion?: shared.ContainerVersion;
    contentType: string;
    statusCode: number;
}
