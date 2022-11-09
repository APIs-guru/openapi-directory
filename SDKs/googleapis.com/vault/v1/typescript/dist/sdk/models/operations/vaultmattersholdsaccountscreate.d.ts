import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsAccountsCreatePathParams extends SpeakeasyBase {
    holdId: string;
    matterId: string;
}
export declare class VaultMattersHoldsAccountsCreateQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersHoldsAccountsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsAccountsCreateRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsAccountsCreatePathParams;
    queryParams: VaultMattersHoldsAccountsCreateQueryParams;
    request?: shared.HeldAccount;
    security: VaultMattersHoldsAccountsCreateSecurity;
}
export declare class VaultMattersHoldsAccountsCreateResponse extends SpeakeasyBase {
    contentType: string;
    heldAccount?: shared.HeldAccount;
    statusCode: number;
}
