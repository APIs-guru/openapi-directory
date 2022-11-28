import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersDeletePathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersDeleteQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersDeleteRequest extends SpeakeasyBase {
    pathParams: VaultMattersDeletePathParams;
    queryParams: VaultMattersDeleteQueryParams;
    security: VaultMattersDeleteSecurity;
}
export declare class VaultMattersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    matter?: shared.Matter;
    statusCode: number;
}
