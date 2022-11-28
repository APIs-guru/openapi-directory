import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreturnsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare enum ContentOrderreturnsListOrderByEnum {
    ReturnCreationTimeDesc = "RETURN_CREATION_TIME_DESC",
    ReturnCreationTimeAsc = "RETURN_CREATION_TIME_ASC"
}
export declare class ContentOrderreturnsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    createdEndDate?: string;
    createdStartDate?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: ContentOrderreturnsListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentOrderreturnsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreturnsListRequest extends SpeakeasyBase {
    pathParams: ContentOrderreturnsListPathParams;
    queryParams: ContentOrderreturnsListQueryParams;
    security: ContentOrderreturnsListSecurity;
}
export declare class ContentOrderreturnsListResponse extends SpeakeasyBase {
    contentType: string;
    orderreturnsListResponse?: shared.OrderreturnsListResponse;
    statusCode: number;
}
