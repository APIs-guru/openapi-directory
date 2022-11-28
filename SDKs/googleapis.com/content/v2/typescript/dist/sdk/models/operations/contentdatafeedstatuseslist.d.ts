import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedstatusesListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentDatafeedstatusesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
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
export declare class ContentDatafeedstatusesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedstatusesListRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedstatusesListPathParams;
    queryParams: ContentDatafeedstatusesListQueryParams;
    security: ContentDatafeedstatusesListSecurity;
}
export declare class ContentDatafeedstatusesListResponse extends SpeakeasyBase {
    contentType: string;
    datafeedstatusesListResponse?: shared.DatafeedstatusesListResponse;
    statusCode: number;
}
