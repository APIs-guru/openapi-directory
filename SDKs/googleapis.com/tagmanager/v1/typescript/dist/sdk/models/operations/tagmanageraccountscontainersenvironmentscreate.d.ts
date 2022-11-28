import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersEnvironmentsCreatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersEnvironmentsCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersEnvironmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersEnvironmentsCreatePathParams;
    queryParams: TagmanagerAccountsContainersEnvironmentsCreateQueryParams;
    request?: shared.Environment;
    security: TagmanagerAccountsContainersEnvironmentsCreateSecurity;
}
export declare class TagmanagerAccountsContainersEnvironmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    environment?: shared.Environment;
    statusCode: number;
}
