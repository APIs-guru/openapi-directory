import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsKeysUploadPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsKeysUploadQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsKeysUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsKeysUploadRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsKeysUploadPathParams;
    queryParams: IamProjectsServiceAccountsKeysUploadQueryParams;
    request?: shared.UploadServiceAccountKeyRequest;
    security: IamProjectsServiceAccountsKeysUploadSecurity;
}
export declare class IamProjectsServiceAccountsKeysUploadResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccountKey?: shared.ServiceAccountKey;
    statusCode: number;
}
