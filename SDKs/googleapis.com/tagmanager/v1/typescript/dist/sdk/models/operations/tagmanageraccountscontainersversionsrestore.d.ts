import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsRestorePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    containerVersionId: string;
}
export declare class TagmanagerAccountsContainersVersionsRestoreQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsRestoreSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsRestoreRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsRestorePathParams;
    queryParams: TagmanagerAccountsContainersVersionsRestoreQueryParams;
    security: TagmanagerAccountsContainersVersionsRestoreSecurity;
}
export declare class TagmanagerAccountsContainersVersionsRestoreResponse extends SpeakeasyBase {
    containerVersion?: shared.ContainerVersion;
    contentType: string;
    statusCode: number;
}
