import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksLayersAnnotationDataListPathParams extends SpeakeasyBase {
    layerId: string;
    volumeId: string;
}
export declare class BooksLayersAnnotationDataListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    annotationDataId?: string[];
    callback?: string;
    contentVersion: string;
    fields?: string;
    h?: number;
    key?: string;
    locale?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    scale?: number;
    source?: string;
    updatedMax?: string;
    updatedMin?: string;
    uploadType?: string;
    uploadProtocol?: string;
    w?: number;
}
export declare class BooksLayersAnnotationDataListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksLayersAnnotationDataListRequest extends SpeakeasyBase {
    pathParams: BooksLayersAnnotationDataListPathParams;
    queryParams: BooksLayersAnnotationDataListQueryParams;
    security: BooksLayersAnnotationDataListSecurity;
}
export declare class BooksLayersAnnotationDataListResponse extends SpeakeasyBase {
    annotationsdata?: shared.Annotationsdata;
    contentType: string;
    statusCode: number;
}
