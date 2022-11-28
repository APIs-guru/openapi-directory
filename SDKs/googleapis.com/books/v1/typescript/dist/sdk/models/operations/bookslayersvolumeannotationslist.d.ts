import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksLayersVolumeAnnotationsListPathParams extends SpeakeasyBase {
    layerId: string;
    volumeId: string;
}
export declare class BooksLayersVolumeAnnotationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    contentVersion: string;
    endOffset?: string;
    endPosition?: string;
    fields?: string;
    key?: string;
    locale?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    source?: string;
    startOffset?: string;
    startPosition?: string;
    updatedMax?: string;
    updatedMin?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeAnnotationsVersion?: string;
}
export declare class BooksLayersVolumeAnnotationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksLayersVolumeAnnotationsListRequest extends SpeakeasyBase {
    pathParams: BooksLayersVolumeAnnotationsListPathParams;
    queryParams: BooksLayersVolumeAnnotationsListQueryParams;
    security: BooksLayersVolumeAnnotationsListSecurity;
}
export declare class BooksLayersVolumeAnnotationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumeannotations?: shared.Volumeannotations;
}
