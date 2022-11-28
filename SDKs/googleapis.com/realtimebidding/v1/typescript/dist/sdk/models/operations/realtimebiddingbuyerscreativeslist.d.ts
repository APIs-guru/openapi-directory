import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersCreativesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum RealtimebiddingBuyersCreativesListViewEnum {
    CreativeViewUnspecified = "CREATIVE_VIEW_UNSPECIFIED",
    ServingDecisionOnly = "SERVING_DECISION_ONLY",
    Full = "FULL"
}
export declare class RealtimebiddingBuyersCreativesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: RealtimebiddingBuyersCreativesListViewEnum;
}
export declare class RealtimebiddingBuyersCreativesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersCreativesListRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersCreativesListPathParams;
    queryParams: RealtimebiddingBuyersCreativesListQueryParams;
    security: RealtimebiddingBuyersCreativesListSecurity;
}
export declare class RealtimebiddingBuyersCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    listCreativesResponse?: shared.ListCreativesResponse;
    statusCode: number;
}
