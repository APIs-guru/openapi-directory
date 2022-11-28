import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductstatusesListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentProductstatusesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    destinations?: string[];
    fields?: string;
    includeAttributes?: boolean;
    includeInvalidInsertedItems?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentProductstatusesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductstatusesListRequest extends SpeakeasyBase {
    pathParams: ContentProductstatusesListPathParams;
    queryParams: ContentProductstatusesListQueryParams;
    security: ContentProductstatusesListSecurity;
}
export declare class ContentProductstatusesListResponse extends SpeakeasyBase {
    contentType: string;
    productstatusesListResponse?: shared.ProductstatusesListResponse;
    statusCode: number;
}
