import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryBookshelvesMoveVolumePathParams extends SpeakeasyBase {
    shelf: string;
}
export declare class BooksMylibraryBookshelvesMoveVolumeQueryParams extends SpeakeasyBase {
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
    volumeId: string;
    volumePosition: number;
}
export declare class BooksMylibraryBookshelvesMoveVolumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryBookshelvesMoveVolumeRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryBookshelvesMoveVolumePathParams;
    queryParams: BooksMylibraryBookshelvesMoveVolumeQueryParams;
    security: BooksMylibraryBookshelvesMoveVolumeSecurity;
}
export declare class BooksMylibraryBookshelvesMoveVolumeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
