import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum VaultMattersListStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED",
    Deleted = "DELETED"
}
export declare enum VaultMattersListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class VaultMattersListQueryParams extends SpeakeasyBase {
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
    state?: VaultMattersListStateEnum;
    uploadType?: string;
    uploadProtocol?: string;
    view?: VaultMattersListViewEnum;
}
export declare class VaultMattersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersListSecurity extends SpeakeasyBase {
    option1?: VaultMattersListSecurityOption1;
    option2?: VaultMattersListSecurityOption2;
}
export declare class VaultMattersListRequest extends SpeakeasyBase {
    queryParams: VaultMattersListQueryParams;
    security: VaultMattersListSecurity;
}
export declare class VaultMattersListResponse extends SpeakeasyBase {
    contentType: string;
    listMattersResponse?: shared.ListMattersResponse;
    statusCode: number;
}
