import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersReopenPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersReopenQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersReopenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersReopenRequest extends SpeakeasyBase {
    pathParams: VaultMattersReopenPathParams;
    queryParams: VaultMattersReopenQueryParams;
    request?: Map<string, any>;
    security: VaultMattersReopenSecurity;
}
export declare class VaultMattersReopenResponse extends SpeakeasyBase {
    contentType: string;
    reopenMatterResponse?: shared.ReopenMatterResponse;
    statusCode: number;
}
