import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryAnnotationsSummaryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    layerIds: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId: string;
}
export declare class BooksMylibraryAnnotationsSummarySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryAnnotationsSummaryRequest extends SpeakeasyBase {
    queryParams: BooksMylibraryAnnotationsSummaryQueryParams;
    security: BooksMylibraryAnnotationsSummarySecurity;
}
export declare class BooksMylibraryAnnotationsSummaryResponse extends SpeakeasyBase {
    annotationsSummary?: shared.AnnotationsSummary;
    contentType: string;
    statusCode: number;
}
