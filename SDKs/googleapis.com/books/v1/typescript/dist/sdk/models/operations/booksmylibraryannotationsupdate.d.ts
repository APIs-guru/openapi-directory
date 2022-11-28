import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryAnnotationsUpdatePathParams extends SpeakeasyBase {
    annotationId: string;
}
export declare class BooksMylibraryAnnotationsUpdateQueryParams extends SpeakeasyBase {
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
export declare class BooksMylibraryAnnotationsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryAnnotationsUpdateRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryAnnotationsUpdatePathParams;
    queryParams: BooksMylibraryAnnotationsUpdateQueryParams;
    request?: shared.Annotation;
    security: BooksMylibraryAnnotationsUpdateSecurity;
}
export declare class BooksMylibraryAnnotationsUpdateResponse extends SpeakeasyBase {
    annotation?: shared.Annotation;
    contentType: string;
    statusCode: number;
}
