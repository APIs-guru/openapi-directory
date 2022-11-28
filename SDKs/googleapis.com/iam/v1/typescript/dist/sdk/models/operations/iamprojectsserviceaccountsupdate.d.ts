import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsUpdateQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsUpdateRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsUpdatePathParams;
    queryParams: IamProjectsServiceAccountsUpdateQueryParams;
    request?: shared.ServiceAccountInput;
    security: IamProjectsServiceAccountsUpdateSecurity;
}
export declare class IamProjectsServiceAccountsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccount?: shared.ServiceAccount;
    statusCode: number;
}
