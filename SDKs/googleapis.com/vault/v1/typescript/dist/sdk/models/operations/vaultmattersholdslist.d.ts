import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsListPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare enum VaultMattersHoldsListViewEnum {
    HoldViewUnspecified = "HOLD_VIEW_UNSPECIFIED",
    BasicHold = "BASIC_HOLD",
    FullHold = "FULL_HOLD"
}
export declare class VaultMattersHoldsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: VaultMattersHoldsListViewEnum;
}
export declare class VaultMattersHoldsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsListSecurity extends SpeakeasyBase {
    option1?: VaultMattersHoldsListSecurityOption1;
    option2?: VaultMattersHoldsListSecurityOption2;
}
export declare class VaultMattersHoldsListRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsListPathParams;
    queryParams: VaultMattersHoldsListQueryParams;
    security: VaultMattersHoldsListSecurity;
}
export declare class VaultMattersHoldsListResponse extends SpeakeasyBase {
    contentType: string;
    listHoldsResponse?: shared.ListHoldsResponse;
    statusCode: number;
}
