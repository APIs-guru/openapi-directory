import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksCloudloadingAddBookQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    driveDocumentId?: string;
    fields?: string;
    key?: string;
    mimeType?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadClientToken?: string;
    uploadProtocol?: string;
}
export declare class BooksCloudloadingAddBookSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksCloudloadingAddBookRequest extends SpeakeasyBase {
    queryParams: BooksCloudloadingAddBookQueryParams;
    security: BooksCloudloadingAddBookSecurity;
}
export declare class BooksCloudloadingAddBookResponse extends SpeakeasyBase {
    booksCloudloadingResource?: shared.BooksCloudloadingResource;
    contentType: string;
    statusCode: number;
}
