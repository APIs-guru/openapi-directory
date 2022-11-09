import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitDefaultSupportedIdpsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdentitytoolkitDefaultSupportedIdpsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitDefaultSupportedIdpsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitDefaultSupportedIdpsListSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitDefaultSupportedIdpsListSecurityOption1;
    option2?: IdentitytoolkitDefaultSupportedIdpsListSecurityOption2;
}
export declare class IdentitytoolkitDefaultSupportedIdpsListRequest extends SpeakeasyBase {
    queryParams: IdentitytoolkitDefaultSupportedIdpsListQueryParams;
    security: IdentitytoolkitDefaultSupportedIdpsListSecurity;
}
export declare class IdentitytoolkitDefaultSupportedIdpsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse?: shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse;
    statusCode: number;
}
