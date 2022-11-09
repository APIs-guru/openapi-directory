import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersCreateQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersCreateRequest extends SpeakeasyBase {
    queryParams: VaultMattersCreateQueryParams;
    request?: shared.Matter;
    security: VaultMattersCreateSecurity;
}
export declare class VaultMattersCreateResponse extends SpeakeasyBase {
    contentType: string;
    matter?: shared.Matter;
    statusCode: number;
}
