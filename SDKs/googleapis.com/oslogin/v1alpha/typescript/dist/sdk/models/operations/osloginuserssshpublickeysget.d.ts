import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsloginUsersSshPublicKeysGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsloginUsersSshPublicKeysGetQueryParams extends SpeakeasyBase {
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
export declare class OsloginUsersSshPublicKeysGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysGetSecurity extends SpeakeasyBase {
    option1?: OsloginUsersSshPublicKeysGetSecurityOption1;
    option2?: OsloginUsersSshPublicKeysGetSecurityOption2;
}
export declare class OsloginUsersSshPublicKeysGetRequest extends SpeakeasyBase {
    pathParams: OsloginUsersSshPublicKeysGetPathParams;
    queryParams: OsloginUsersSshPublicKeysGetQueryParams;
    security: OsloginUsersSshPublicKeysGetSecurity;
}
export declare class OsloginUsersSshPublicKeysGetResponse extends SpeakeasyBase {
    contentType: string;
    sshPublicKey?: shared.SshPublicKey;
    statusCode: number;
}
