import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreportsListdisbursementsPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentOrderreportsListdisbursementsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    disbursementEndDate?: string;
    disbursementStartDate?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentOrderreportsListdisbursementsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreportsListdisbursementsRequest extends SpeakeasyBase {
    pathParams: ContentOrderreportsListdisbursementsPathParams;
    queryParams: ContentOrderreportsListdisbursementsQueryParams;
    security: ContentOrderreportsListdisbursementsSecurity;
}
export declare class ContentOrderreportsListdisbursementsResponse extends SpeakeasyBase {
    contentType: string;
    orderreportsListDisbursementsResponse?: shared.OrderreportsListDisbursementsResponse;
    statusCode: number;
}
