import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTagsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    tagId: string;
}
export declare class TagmanagerAccountsContainersTagsUpdateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTagsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTagsUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTagsUpdatePathParams;
    queryParams: TagmanagerAccountsContainersTagsUpdateQueryParams;
    request?: shared.Tag;
    security: TagmanagerAccountsContainersTagsUpdateSecurity;
}
export declare class TagmanagerAccountsContainersTagsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
