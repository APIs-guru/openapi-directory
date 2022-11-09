import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OsloginUsersImportSshPublicKeyPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsloginUsersImportSshPublicKeyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsloginUsersImportSshPublicKeySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersImportSshPublicKeySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersImportSshPublicKeySecurity extends SpeakeasyBase {
    option1?: OsloginUsersImportSshPublicKeySecurityOption1;
    option2?: OsloginUsersImportSshPublicKeySecurityOption2;
}
export declare class OsloginUsersImportSshPublicKeyRequest extends SpeakeasyBase {
    pathParams: OsloginUsersImportSshPublicKeyPathParams;
    queryParams: OsloginUsersImportSshPublicKeyQueryParams;
    request?: shared.SshPublicKey;
    security: OsloginUsersImportSshPublicKeySecurity;
}
export declare class OsloginUsersImportSshPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    importSshPublicKeyResponse?: shared.ImportSshPublicKeyResponse;
    statusCode: number;
}
