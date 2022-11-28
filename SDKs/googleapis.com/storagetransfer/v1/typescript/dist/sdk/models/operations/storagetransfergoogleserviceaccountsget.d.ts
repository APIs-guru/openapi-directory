import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferGoogleServiceAccountsGetPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class StoragetransferGoogleServiceAccountsGetQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferGoogleServiceAccountsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferGoogleServiceAccountsGetRequest extends SpeakeasyBase {
    pathParams: StoragetransferGoogleServiceAccountsGetPathParams;
    queryParams: StoragetransferGoogleServiceAccountsGetQueryParams;
    security: StoragetransferGoogleServiceAccountsGetSecurity;
}
export declare class StoragetransferGoogleServiceAccountsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleServiceAccount?: shared.GoogleServiceAccount;
    statusCode: number;
}
