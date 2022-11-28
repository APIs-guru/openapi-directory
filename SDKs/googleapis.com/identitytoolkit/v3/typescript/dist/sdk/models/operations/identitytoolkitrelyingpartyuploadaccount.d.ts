import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyUploadAccountQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitRelyingpartyUploadAccountSecurityOption1;
    option2?: IdentitytoolkitRelyingpartyUploadAccountSecurityOption2;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyUploadAccountQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyUploadAccountRequest;
    security: IdentitytoolkitRelyingpartyUploadAccountSecurity;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadAccountResponse?: shared.UploadAccountResponse;
}
