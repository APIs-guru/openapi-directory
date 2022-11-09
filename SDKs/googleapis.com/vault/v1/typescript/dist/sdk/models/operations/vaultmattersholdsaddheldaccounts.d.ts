import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsAddHeldAccountsPathParams extends SpeakeasyBase {
    holdId: string;
    matterId: string;
}
export declare class VaultMattersHoldsAddHeldAccountsQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersHoldsAddHeldAccountsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsAddHeldAccountsRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsAddHeldAccountsPathParams;
    queryParams: VaultMattersHoldsAddHeldAccountsQueryParams;
    request?: shared.AddHeldAccountsRequest;
    security: VaultMattersHoldsAddHeldAccountsSecurity;
}
export declare class VaultMattersHoldsAddHeldAccountsResponse extends SpeakeasyBase {
    addHeldAccountsResponse?: shared.AddHeldAccountsResponse;
    contentType: string;
    statusCode: number;
}
