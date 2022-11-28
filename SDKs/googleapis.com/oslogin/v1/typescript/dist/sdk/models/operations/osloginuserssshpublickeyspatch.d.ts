import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsloginUsersSshPublicKeysPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsloginUsersSshPublicKeysPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsloginUsersSshPublicKeysPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysPatchSecurity extends SpeakeasyBase {
    option1?: OsloginUsersSshPublicKeysPatchSecurityOption1;
    option2?: OsloginUsersSshPublicKeysPatchSecurityOption2;
}
export declare class OsloginUsersSshPublicKeysPatchRequest extends SpeakeasyBase {
    pathParams: OsloginUsersSshPublicKeysPatchPathParams;
    queryParams: OsloginUsersSshPublicKeysPatchQueryParams;
    request?: shared.SshPublicKeyInput;
    security: OsloginUsersSshPublicKeysPatchSecurity;
}
export declare class OsloginUsersSshPublicKeysPatchResponse extends SpeakeasyBase {
    contentType: string;
    sshPublicKey?: shared.SshPublicKey;
    statusCode: number;
}
