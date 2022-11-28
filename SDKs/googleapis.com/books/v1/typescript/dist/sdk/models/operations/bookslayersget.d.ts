import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksLayersGetPathParams extends SpeakeasyBase {
    summaryId: string;
    volumeId: string;
}
export declare class BooksLayersGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    contentVersion?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksLayersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksLayersGetRequest extends SpeakeasyBase {
    pathParams: BooksLayersGetPathParams;
    queryParams: BooksLayersGetQueryParams;
    security: BooksLayersGetSecurity;
}
export declare class BooksLayersGetResponse extends SpeakeasyBase {
    contentType: string;
    layersummary?: shared.Layersummary;
    statusCode: number;
}
