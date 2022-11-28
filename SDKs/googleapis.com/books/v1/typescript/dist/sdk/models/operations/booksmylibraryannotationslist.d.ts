import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryAnnotationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    contentVersion?: string;
    fields?: string;
    key?: string;
    layerId?: string;
    layerIds?: string[];
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    source?: string;
    updatedMax?: string;
    updatedMin?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId?: string;
}
export declare class BooksMylibraryAnnotationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryAnnotationsListRequest extends SpeakeasyBase {
    queryParams: BooksMylibraryAnnotationsListQueryParams;
    security: BooksMylibraryAnnotationsListSecurity;
}
export declare class BooksMylibraryAnnotationsListResponse extends SpeakeasyBase {
    annotations?: shared.Annotations;
    contentType: string;
    statusCode: number;
}
