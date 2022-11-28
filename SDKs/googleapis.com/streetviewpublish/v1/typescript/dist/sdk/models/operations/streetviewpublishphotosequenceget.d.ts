import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoSequenceGetPathParams extends SpeakeasyBase {
    sequenceId: string;
}
export declare enum StreetviewpublishPhotoSequenceGetViewEnum {
    Basic = "BASIC",
    IncludeDownloadUrl = "INCLUDE_DOWNLOAD_URL"
}
export declare class StreetviewpublishPhotoSequenceGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: StreetviewpublishPhotoSequenceGetViewEnum;
}
export declare class StreetviewpublishPhotoSequenceGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoSequenceGetRequest extends SpeakeasyBase {
    pathParams: StreetviewpublishPhotoSequenceGetPathParams;
    queryParams: StreetviewpublishPhotoSequenceGetQueryParams;
    security: StreetviewpublishPhotoSequenceGetSecurity;
}
export declare class StreetviewpublishPhotoSequenceGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
