import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsSetLatestPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersVersionsSetLatestQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsSetLatestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsSetLatestRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsSetLatestPathParams;
    queryParams: TagmanagerAccountsContainersVersionsSetLatestQueryParams;
    security: TagmanagerAccountsContainersVersionsSetLatestSecurity;
}
export declare class TagmanagerAccountsContainersVersionsSetLatestResponse extends SpeakeasyBase {
    containerVersion?: shared.ContainerVersion;
    contentType: string;
    statusCode: number;
}
