import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    containerVersionId: string;
}
export declare class TagmanagerAccountsContainersVersionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsDeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsDeletePathParams;
    queryParams: TagmanagerAccountsContainersVersionsDeleteQueryParams;
    security: TagmanagerAccountsContainersVersionsDeleteSecurity;
}
export declare class TagmanagerAccountsContainersVersionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
