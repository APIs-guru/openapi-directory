import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersExportsGetPathParams extends SpeakeasyBase {
    exportId: string;
    matterId: string;
}
export declare class VaultMattersExportsGetQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersExportsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersExportsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersExportsGetSecurity extends SpeakeasyBase {
    option1?: VaultMattersExportsGetSecurityOption1;
    option2?: VaultMattersExportsGetSecurityOption2;
}
export declare class VaultMattersExportsGetRequest extends SpeakeasyBase {
    pathParams: VaultMattersExportsGetPathParams;
    queryParams: VaultMattersExportsGetQueryParams;
    security: VaultMattersExportsGetSecurity;
}
export declare class VaultMattersExportsGetResponse extends SpeakeasyBase {
    contentType: string;
    export?: shared.Export;
    statusCode: number;
}
