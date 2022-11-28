import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersCreatePathParams;
    queryParams: TagmanagerAccountsContainersCreateQueryParams;
    request?: shared.Container;
    security: TagmanagerAccountsContainersCreateSecurity;
}
export declare class TagmanagerAccountsContainersCreateResponse extends SpeakeasyBase {
    container?: shared.Container;
    contentType: string;
    statusCode: number;
}
