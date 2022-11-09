import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersExportsCreatePathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersExportsCreateQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersExportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersExportsCreateRequest extends SpeakeasyBase {
    pathParams: VaultMattersExportsCreatePathParams;
    queryParams: VaultMattersExportsCreateQueryParams;
    request?: shared.Export;
    security: VaultMattersExportsCreateSecurity;
}
export declare class VaultMattersExportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    export?: shared.Export;
    statusCode: number;
}
