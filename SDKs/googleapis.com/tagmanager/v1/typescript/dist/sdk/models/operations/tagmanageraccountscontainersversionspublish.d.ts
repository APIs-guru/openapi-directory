import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsPublishPathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    containerVersionId: string;
}
export declare class TagmanagerAccountsContainersVersionsPublishQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsPublishSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsPublishRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsPublishPathParams;
    queryParams: TagmanagerAccountsContainersVersionsPublishQueryParams;
    security: TagmanagerAccountsContainersVersionsPublishSecurity;
}
export declare class TagmanagerAccountsContainersVersionsPublishResponse extends SpeakeasyBase {
    contentType: string;
    publishContainerVersionResponse?: shared.PublishContainerVersionResponse;
    statusCode: number;
}
