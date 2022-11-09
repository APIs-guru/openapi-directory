import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamcredentialsProjectsServiceAccountsSignBlobPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamcredentialsProjectsServiceAccountsSignBlobQueryParams extends SpeakeasyBase {
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
export declare class IamcredentialsProjectsServiceAccountsSignBlobSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamcredentialsProjectsServiceAccountsSignBlobRequest extends SpeakeasyBase {
    pathParams: IamcredentialsProjectsServiceAccountsSignBlobPathParams;
    queryParams: IamcredentialsProjectsServiceAccountsSignBlobQueryParams;
    request?: shared.SignBlobRequest;
    security: IamcredentialsProjectsServiceAccountsSignBlobSecurity;
}
export declare class IamcredentialsProjectsServiceAccountsSignBlobResponse extends SpeakeasyBase {
    contentType: string;
    signBlobResponse?: shared.SignBlobResponse;
    statusCode: number;
}
