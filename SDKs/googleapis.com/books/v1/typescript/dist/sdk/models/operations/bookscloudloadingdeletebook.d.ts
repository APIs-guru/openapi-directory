import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksCloudloadingDeleteBookQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId: string;
}
export declare class BooksCloudloadingDeleteBookSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksCloudloadingDeleteBookRequest extends SpeakeasyBase {
    queryParams: BooksCloudloadingDeleteBookQueryParams;
    security: BooksCloudloadingDeleteBookSecurity;
}
export declare class BooksCloudloadingDeleteBookResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
