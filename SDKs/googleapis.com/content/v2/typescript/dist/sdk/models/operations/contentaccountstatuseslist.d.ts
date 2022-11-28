import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountstatusesListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentAccountstatusesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    destinations?: string[];
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
export declare class ContentAccountstatusesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountstatusesListRequest extends SpeakeasyBase {
    pathParams: ContentAccountstatusesListPathParams;
    queryParams: ContentAccountstatusesListQueryParams;
    security: ContentAccountstatusesListSecurity;
}
export declare class ContentAccountstatusesListResponse extends SpeakeasyBase {
    accountstatusesListResponse?: shared.AccountstatusesListResponse;
    contentType: string;
    statusCode: number;
}
