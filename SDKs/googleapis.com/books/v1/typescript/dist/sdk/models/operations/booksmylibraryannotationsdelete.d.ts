import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryAnnotationsDeletePathParams extends SpeakeasyBase {
    annotationId: string;
}
export declare class BooksMylibraryAnnotationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class BooksMylibraryAnnotationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryAnnotationsDeleteRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryAnnotationsDeletePathParams;
    queryParams: BooksMylibraryAnnotationsDeleteQueryParams;
    security: BooksMylibraryAnnotationsDeleteSecurity;
}
export declare class BooksMylibraryAnnotationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
