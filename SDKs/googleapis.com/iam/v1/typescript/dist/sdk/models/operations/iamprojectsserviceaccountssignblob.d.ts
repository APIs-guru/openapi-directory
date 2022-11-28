import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsSignBlobPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsSignBlobQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsSignBlobSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsSignBlobRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsSignBlobPathParams;
    queryParams: IamProjectsServiceAccountsSignBlobQueryParams;
    request?: shared.SignBlobRequest;
    security: IamProjectsServiceAccountsSignBlobSecurity;
}
export declare class IamProjectsServiceAccountsSignBlobResponse extends SpeakeasyBase {
    contentType: string;
    signBlobResponse?: shared.SignBlobResponse;
    statusCode: number;
}
