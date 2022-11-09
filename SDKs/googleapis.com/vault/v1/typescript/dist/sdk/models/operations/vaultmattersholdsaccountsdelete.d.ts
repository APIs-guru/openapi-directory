import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsAccountsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    holdId: string;
    matterId: string;
}
export declare class VaultMattersHoldsAccountsDeleteQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersHoldsAccountsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsAccountsDeleteRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsAccountsDeletePathParams;
    queryParams: VaultMattersHoldsAccountsDeleteQueryParams;
    security: VaultMattersHoldsAccountsDeleteSecurity;
}
export declare class VaultMattersHoldsAccountsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
