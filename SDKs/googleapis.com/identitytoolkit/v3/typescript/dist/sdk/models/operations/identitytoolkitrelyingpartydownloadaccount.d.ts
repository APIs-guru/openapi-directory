import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitRelyingpartyDownloadAccountQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitRelyingpartyDownloadAccountSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1;
    option2?: IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2;
}
export declare class IdentitytoolkitRelyingpartyDownloadAccountRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitRelyingpartyDownloadAccountQueryParams;
    request?: shared.IdentitytoolkitRelyingpartyDownloadAccountRequest;
    security: IdentitytoolkitRelyingpartyDownloadAccountSecurity;
}
export declare class IdentitytoolkitRelyingpartyDownloadAccountResponse extends SpeakeasyBase {
    contentType: string;
    downloadAccountResponse?: shared.DownloadAccountResponse;
    statusCode: number;
}
