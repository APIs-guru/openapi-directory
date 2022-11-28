import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryBookshelvesClearVolumesPathParams extends SpeakeasyBase {
    shelf: string;
}
export declare class BooksMylibraryBookshelvesClearVolumesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMylibraryBookshelvesClearVolumesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryBookshelvesClearVolumesRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryBookshelvesClearVolumesPathParams;
    queryParams: BooksMylibraryBookshelvesClearVolumesQueryParams;
    security: BooksMylibraryBookshelvesClearVolumesSecurity;
}
export declare class BooksMylibraryBookshelvesClearVolumesResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
