import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksLayersAnnotationDataGetPathParams extends SpeakeasyBase {
    annotationDataId: string;
    layerId: string;
    volumeId: string;
}
export declare class BooksLayersAnnotationDataGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowWebDefinitions?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    contentVersion: string;
    fields?: string;
    h?: number;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    scale?: number;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
    w?: number;
}
export declare class BooksLayersAnnotationDataGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksLayersAnnotationDataGetRequest extends SpeakeasyBase {
    pathParams: BooksLayersAnnotationDataGetPathParams;
    queryParams: BooksLayersAnnotationDataGetQueryParams;
    security: BooksLayersAnnotationDataGetSecurity;
}
export declare class BooksLayersAnnotationDataGetResponse extends SpeakeasyBase {
    contentType: string;
    dictionaryAnnotationdata?: shared.DictionaryAnnotationdata;
    statusCode: number;
}
