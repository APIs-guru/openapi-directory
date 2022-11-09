import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsRemoveHeldAccountsPathParams extends SpeakeasyBase {
    holdId: string;
    matterId: string;
}
export declare class VaultMattersHoldsRemoveHeldAccountsQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersHoldsRemoveHeldAccountsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsRemoveHeldAccountsRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsRemoveHeldAccountsPathParams;
    queryParams: VaultMattersHoldsRemoveHeldAccountsQueryParams;
    request?: shared.RemoveHeldAccountsRequest;
    security: VaultMattersHoldsRemoveHeldAccountsSecurity;
}
export declare class VaultMattersHoldsRemoveHeldAccountsResponse extends SpeakeasyBase {
    contentType: string;
    removeHeldAccountsResponse?: shared.RemoveHeldAccountsResponse;
    statusCode: number;
}
