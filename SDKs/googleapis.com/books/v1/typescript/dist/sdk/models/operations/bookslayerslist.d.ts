import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksLayersListPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class BooksLayersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    contentVersion?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksLayersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksLayersListRequest extends SpeakeasyBase {
    pathParams: BooksLayersListPathParams;
    queryParams: BooksLayersListQueryParams;
    security: BooksLayersListSecurity;
}
export declare class BooksLayersListResponse extends SpeakeasyBase {
    contentType: string;
    layersummaries?: shared.Layersummaries;
    statusCode: number;
}
