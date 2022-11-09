import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersExportsListPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersExportsListQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersExportsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersExportsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersExportsListSecurity extends SpeakeasyBase {
    option1?: VaultMattersExportsListSecurityOption1;
    option2?: VaultMattersExportsListSecurityOption2;
}
export declare class VaultMattersExportsListRequest extends SpeakeasyBase {
    pathParams: VaultMattersExportsListPathParams;
    queryParams: VaultMattersExportsListQueryParams;
    security: VaultMattersExportsListSecurity;
}
export declare class VaultMattersExportsListResponse extends SpeakeasyBase {
    contentType: string;
    listExportsResponse?: shared.ListExportsResponse;
    statusCode: number;
}
