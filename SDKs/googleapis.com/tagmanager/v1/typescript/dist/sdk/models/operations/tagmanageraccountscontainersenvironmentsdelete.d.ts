import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersEnvironmentsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    environmentId: string;
}
export declare class TagmanagerAccountsContainersEnvironmentsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersEnvironmentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsDeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersEnvironmentsDeletePathParams;
    queryParams: TagmanagerAccountsContainersEnvironmentsDeleteQueryParams;
    security: TagmanagerAccountsContainersEnvironmentsDeleteSecurity;
}
export declare class TagmanagerAccountsContainersEnvironmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
