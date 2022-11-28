import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersListQueryParams extends SpeakeasyBase {
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
}
export declare class RealtimebiddingBuyersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersListRequest extends SpeakeasyBase {
    queryParams: RealtimebiddingBuyersListQueryParams;
    security: RealtimebiddingBuyersListSecurity;
}
export declare class RealtimebiddingBuyersListResponse extends SpeakeasyBase {
    contentType: string;
    listBuyersResponse?: shared.ListBuyersResponse;
    statusCode: number;
}
