import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTagsCreatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersTagsCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTagsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTagsCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTagsCreatePathParams;
    queryParams: TagmanagerAccountsContainersTagsCreateQueryParams;
    request?: shared.Tag;
    security: TagmanagerAccountsContainersTagsCreateSecurity;
}
export declare class TagmanagerAccountsContainersTagsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
