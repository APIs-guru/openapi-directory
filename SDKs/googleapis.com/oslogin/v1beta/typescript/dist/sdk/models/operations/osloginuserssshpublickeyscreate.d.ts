import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OsloginUsersSshPublicKeysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsloginUsersSshPublicKeysCreateQueryParams extends SpeakeasyBase {
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
export declare class OsloginUsersSshPublicKeysCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysCreateSecurity extends SpeakeasyBase {
    option1?: OsloginUsersSshPublicKeysCreateSecurityOption1;
    option2?: OsloginUsersSshPublicKeysCreateSecurityOption2;
}
export declare class OsloginUsersSshPublicKeysCreateRequest extends SpeakeasyBase {
    pathParams: OsloginUsersSshPublicKeysCreatePathParams;
    queryParams: OsloginUsersSshPublicKeysCreateQueryParams;
    request?: shared.SshPublicKey;
    security: OsloginUsersSshPublicKeysCreateSecurity;
}
export declare class OsloginUsersSshPublicKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    sshPublicKey?: shared.SshPublicKey;
    statusCode: number;
}
