import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksLayersVolumeAnnotationsGetPathParams extends SpeakeasyBase {
    annotationId: string;
    layerId: string;
    volumeId: string;
}
export declare class BooksLayersVolumeAnnotationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksLayersVolumeAnnotationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksLayersVolumeAnnotationsGetRequest extends SpeakeasyBase {
    pathParams: BooksLayersVolumeAnnotationsGetPathParams;
    queryParams: BooksLayersVolumeAnnotationsGetQueryParams;
    security: BooksLayersVolumeAnnotationsGetSecurity;
}
export declare class BooksLayersVolumeAnnotationsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumeannotation?: shared.Volumeannotation;
}
