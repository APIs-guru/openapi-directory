import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersGetPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare enum VaultMattersGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class VaultMattersGetQueryParams extends SpeakeasyBase {
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
    view?: VaultMattersGetViewEnum;
}
export declare class VaultMattersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersGetSecurity extends SpeakeasyBase {
    option1?: VaultMattersGetSecurityOption1;
    option2?: VaultMattersGetSecurityOption2;
}
export declare class VaultMattersGetRequest extends SpeakeasyBase {
    pathParams: VaultMattersGetPathParams;
    queryParams: VaultMattersGetQueryParams;
    security: VaultMattersGetSecurity;
}
export declare class VaultMattersGetResponse extends SpeakeasyBase {
    contentType: string;
    matter?: shared.Matter;
    statusCode: number;
}
