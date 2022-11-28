import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsUpdatePathParams extends SpeakeasyBase {
    holdId: string;
    matterId: string;
}
export declare class VaultMattersHoldsUpdateQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersHoldsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsUpdateRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsUpdatePathParams;
    queryParams: VaultMattersHoldsUpdateQueryParams;
    request?: shared.Hold;
    security: VaultMattersHoldsUpdateSecurity;
}
export declare class VaultMattersHoldsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    hold?: shared.Hold;
    statusCode: number;
}
