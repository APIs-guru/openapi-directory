import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksVolumesListDownloadEnum {
    DownloadUndefined = "DOWNLOAD_UNDEFINED",
    Epub = "EPUB"
}
export declare enum BooksVolumesListFilterEnum {
    FilterUndefined = "FILTER_UNDEFINED",
    Ebooks = "ebooks",
    FreeEbooks = "free-ebooks",
    Full = "full",
    PaidEbooks = "paid-ebooks",
    Partial = "partial"
}
export declare enum BooksVolumesListLibraryRestrictEnum {
    LibraryRestrictUndefined = "LIBRARY_RESTRICT_UNDEFINED",
    MyLibrary = "my-library",
    NoRestrict = "no-restrict"
}
export declare enum BooksVolumesListMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}
export declare enum BooksVolumesListOrderByEnum {
    OrderByUndefined = "ORDER_BY_UNDEFINED",
    Newest = "newest",
    Relevance = "relevance"
}
export declare enum BooksVolumesListPrintTypeEnum {
    PrintTypeUndefined = "PRINT_TYPE_UNDEFINED",
    All = "ALL",
    Books = "BOOKS",
    Magazines = "MAGAZINES"
}
export declare enum BooksVolumesListProjectionEnum {
    ProjectionUndefined = "PROJECTION_UNDEFINED",
    Full = "FULL",
    Lite = "LITE"
}
export declare class BooksVolumesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    download?: BooksVolumesListDownloadEnum;
    fields?: string;
    filter?: BooksVolumesListFilterEnum;
    key?: string;
    langRestrict?: string;
    libraryRestrict?: BooksVolumesListLibraryRestrictEnum;
    maxAllowedMaturityRating?: BooksVolumesListMaxAllowedMaturityRatingEnum;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: BooksVolumesListOrderByEnum;
    partner?: string;
    prettyPrint?: boolean;
    printType?: BooksVolumesListPrintTypeEnum;
    projection?: BooksVolumesListProjectionEnum;
    q: string;
    quotaUser?: string;
    showPreorders?: boolean;
    source?: string;
    startIndex?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksVolumesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksVolumesListRequest extends SpeakeasyBase {
    queryParams: BooksVolumesListQueryParams;
    security: BooksVolumesListSecurity;
}
export declare class BooksVolumesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
