import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersEnvironmentsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    environmentId: string;
}
export declare class TagmanagerAccountsContainersEnvironmentsUpdateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersEnvironmentsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersEnvironmentsUpdatePathParams;
    queryParams: TagmanagerAccountsContainersEnvironmentsUpdateQueryParams;
    request?: shared.Environment;
    security: TagmanagerAccountsContainersEnvironmentsUpdateSecurity;
}
export declare class TagmanagerAccountsContainersEnvironmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    environment?: shared.Environment;
    statusCode: number;
}
