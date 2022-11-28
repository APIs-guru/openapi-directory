import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BooksVolumesListDownloadEnum {
    DownloadUndefined = "DOWNLOAD_UNDEFINED",
    Epub = "EPUB"
}

export enum BooksVolumesListFilterEnum {
    FilterUndefined = "FILTER_UNDEFINED",
    Ebooks = "ebooks",
    FreeEbooks = "free-ebooks",
    Full = "full",
    PaidEbooks = "paid-ebooks",
    Partial = "partial"
}

export enum BooksVolumesListLibraryRestrictEnum {
    LibraryRestrictUndefined = "LIBRARY_RESTRICT_UNDEFINED",
    MyLibrary = "my-library",
    NoRestrict = "no-restrict"
}

export enum BooksVolumesListMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}

export enum BooksVolumesListOrderByEnum {
    OrderByUndefined = "ORDER_BY_UNDEFINED",
    Newest = "newest",
    Relevance = "relevance"
}

export enum BooksVolumesListPrintTypeEnum {
    PrintTypeUndefined = "PRINT_TYPE_UNDEFINED",
    All = "ALL",
    Books = "BOOKS",
    Magazines = "MAGAZINES"
}

export enum BooksVolumesListProjectionEnum {
    ProjectionUndefined = "PROJECTION_UNDEFINED",
    Full = "FULL",
    Lite = "LITE"
}


export class BooksVolumesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download" })
  download?: BooksVolumesListDownloadEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: BooksVolumesListFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=langRestrict" })
  langRestrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=libraryRestrict" })
  libraryRestrict?: BooksVolumesListLibraryRestrictEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAllowedMaturityRating" })
  maxAllowedMaturityRating?: BooksVolumesListMaxAllowedMaturityRatingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: BooksVolumesListOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner" })
  partner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printType" })
  printType?: BooksVolumesListPrintTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: BooksVolumesListProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showPreorders" })
  showPreorders?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BooksVolumesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksVolumesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BooksVolumesListQueryParams;

  @SpeakeasyMetadata()
  security: BooksVolumesListSecurity;
}


export class BooksVolumesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volumes?: shared.Volumes;
}
