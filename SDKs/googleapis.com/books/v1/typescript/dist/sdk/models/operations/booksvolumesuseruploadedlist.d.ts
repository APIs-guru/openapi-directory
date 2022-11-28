import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksVolumesUseruploadedListProcessingStateEnum {
    ProcessingStateUndefined = "PROCESSING_STATE_UNDEFINED",
    CompletedFailed = "COMPLETED_FAILED",
    CompletedSuccess = "COMPLETED_SUCCESS",
    Running = "RUNNING"
}
export declare class BooksVolumesUseruploadedListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    processingState?: BooksVolumesUseruploadedListProcessingStateEnum[];
    quotaUser?: string;
    source?: string;
    startIndex?: number;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId?: string[];
}
export declare class BooksVolumesUseruploadedListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksVolumesUseruploadedListRequest extends SpeakeasyBase {
    queryParams: BooksVolumesUseruploadedListQueryParams;
    security: BooksVolumesUseruploadedListSecurity;
}
export declare class BooksVolumesUseruploadedListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
