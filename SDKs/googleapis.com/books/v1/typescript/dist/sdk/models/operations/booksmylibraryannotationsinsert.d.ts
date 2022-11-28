import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryAnnotationsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    annotationId?: string;
    callback?: string;
    country?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showOnlySummaryInResponse?: boolean;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMylibraryAnnotationsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryAnnotationsInsertRequest extends SpeakeasyBase {
    queryParams: BooksMylibraryAnnotationsInsertQueryParams;
    request?: shared.Annotation;
    security: BooksMylibraryAnnotationsInsertSecurity;
}
export declare class BooksMylibraryAnnotationsInsertResponse extends SpeakeasyBase {
    annotation?: shared.Annotation;
    contentType: string;
    statusCode: number;
}
