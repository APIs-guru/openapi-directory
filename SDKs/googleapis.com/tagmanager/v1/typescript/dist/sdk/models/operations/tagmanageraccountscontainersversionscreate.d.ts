import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsCreatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersVersionsCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsCreatePathParams;
    queryParams: TagmanagerAccountsContainersVersionsCreateQueryParams;
    request?: shared.CreateContainerVersionRequestVersionOptions;
    security: TagmanagerAccountsContainersVersionsCreateSecurity;
}
export declare class TagmanagerAccountsContainersVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    createContainerVersionResponse?: shared.CreateContainerVersionResponse;
    statusCode: number;
}
