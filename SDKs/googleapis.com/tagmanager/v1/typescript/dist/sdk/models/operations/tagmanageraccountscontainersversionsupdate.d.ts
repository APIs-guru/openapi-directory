import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    containerVersionId: string;
}
export declare class TagmanagerAccountsContainersVersionsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fingerprint?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersVersionsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsUpdatePathParams;
    queryParams: TagmanagerAccountsContainersVersionsUpdateQueryParams;
    request?: shared.ContainerVersion;
    security: TagmanagerAccountsContainersVersionsUpdateSecurity;
}
export declare class TagmanagerAccountsContainersVersionsUpdateResponse extends SpeakeasyBase {
    containerVersion?: shared.ContainerVersion;
    contentType: string;
    statusCode: number;
}
