import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsGetPathParams extends SpeakeasyBase {
    holdId: string;
    matterId: string;
}
export declare enum VaultMattersHoldsGetViewEnum {
    HoldViewUnspecified = "HOLD_VIEW_UNSPECIFIED",
    BasicHold = "BASIC_HOLD",
    FullHold = "FULL_HOLD"
}
export declare class VaultMattersHoldsGetQueryParams extends SpeakeasyBase {
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
    view?: VaultMattersHoldsGetViewEnum;
}
export declare class VaultMattersHoldsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsGetSecurity extends SpeakeasyBase {
    option1?: VaultMattersHoldsGetSecurityOption1;
    option2?: VaultMattersHoldsGetSecurityOption2;
}
export declare class VaultMattersHoldsGetRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsGetPathParams;
    queryParams: VaultMattersHoldsGetQueryParams;
    security: VaultMattersHoldsGetSecurity;
}
export declare class VaultMattersHoldsGetResponse extends SpeakeasyBase {
    contentType: string;
    hold?: shared.Hold;
    statusCode: number;
}
