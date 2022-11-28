import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksVolumesMybooksListAcquireMethodEnum {
    AcquireMethodUndefined = "ACQUIRE_METHOD_UNDEFINED",
    FamilyShared = "FAMILY_SHARED",
    Preordered = "PREORDERED",
    PreviouslyRented = "PREVIOUSLY_RENTED",
    PublicDomain = "PUBLIC_DOMAIN",
    Purchased = "PURCHASED",
    Rented = "RENTED",
    Sample = "SAMPLE",
    Uploaded = "UPLOADED"
}
export declare enum BooksVolumesMybooksListProcessingStateEnum {
    ProcessingStateUndefined = "PROCESSING_STATE_UNDEFINED",
    CompletedFailed = "COMPLETED_FAILED",
    CompletedSuccess = "COMPLETED_SUCCESS",
    Running = "RUNNING"
}
export declare class BooksVolumesMybooksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    acquireMethod?: BooksVolumesMybooksListAcquireMethodEnum[];
    alt?: shared.AltEnum;
    callback?: string;
    country?: string;
    fields?: string;
    key?: string;
    locale?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    processingState?: BooksVolumesMybooksListProcessingStateEnum[];
    quotaUser?: string;
    source?: string;
    startIndex?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksVolumesMybooksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksVolumesMybooksListRequest extends SpeakeasyBase {
    queryParams: BooksVolumesMybooksListQueryParams;
    security: BooksVolumesMybooksListSecurity;
}
export declare class BooksVolumesMybooksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
