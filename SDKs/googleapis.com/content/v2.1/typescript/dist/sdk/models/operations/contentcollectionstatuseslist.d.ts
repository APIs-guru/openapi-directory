import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentCollectionstatusesListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentCollectionstatusesListQueryParams extends SpeakeasyBase {
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
export declare class ContentCollectionstatusesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentCollectionstatusesListRequest extends SpeakeasyBase {
    pathParams: ContentCollectionstatusesListPathParams;
    queryParams: ContentCollectionstatusesListQueryParams;
    security: ContentCollectionstatusesListSecurity;
}
export declare class ContentCollectionstatusesListResponse extends SpeakeasyBase {
    contentType: string;
    listCollectionStatusesResponse?: shared.ListCollectionStatusesResponse;
    statusCode: number;
}
