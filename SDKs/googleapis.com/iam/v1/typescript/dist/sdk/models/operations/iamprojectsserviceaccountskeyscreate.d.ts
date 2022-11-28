import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsKeysCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsKeysCreateQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsKeysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsKeysCreateRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsKeysCreatePathParams;
    queryParams: IamProjectsServiceAccountsKeysCreateQueryParams;
    request?: shared.CreateServiceAccountKeyRequest;
    security: IamProjectsServiceAccountsKeysCreateSecurity;
}
export declare class IamProjectsServiceAccountsKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccountKey?: shared.ServiceAccountKey;
    statusCode: number;
}
