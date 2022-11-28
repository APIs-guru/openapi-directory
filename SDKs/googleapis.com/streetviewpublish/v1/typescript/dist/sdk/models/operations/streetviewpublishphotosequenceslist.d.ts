import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoSequencesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class StreetviewpublishPhotoSequencesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoSequencesListRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotoSequencesListQueryParams;
    security: StreetviewpublishPhotoSequencesListSecurity;
}
export declare class StreetviewpublishPhotoSequencesListResponse extends SpeakeasyBase {
    contentType: string;
    listPhotoSequencesResponse?: shared.ListPhotoSequencesResponse;
    statusCode: number;
}
