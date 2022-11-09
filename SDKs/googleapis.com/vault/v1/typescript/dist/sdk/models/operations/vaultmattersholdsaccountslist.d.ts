import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsAccountsListPathParams extends SpeakeasyBase {
    holdId: string;
    matterId: string;
}
export declare class VaultMattersHoldsAccountsListQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersHoldsAccountsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsAccountsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsAccountsListSecurity extends SpeakeasyBase {
    option1?: VaultMattersHoldsAccountsListSecurityOption1;
    option2?: VaultMattersHoldsAccountsListSecurityOption2;
}
export declare class VaultMattersHoldsAccountsListRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsAccountsListPathParams;
    queryParams: VaultMattersHoldsAccountsListQueryParams;
    security: VaultMattersHoldsAccountsListSecurity;
}
export declare class VaultMattersHoldsAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    listHeldAccountsResponse?: shared.ListHeldAccountsResponse;
    statusCode: number;
}
