import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BooksVolumesListDownloadEnum {
    DownloadUndefined = "DOWNLOAD_UNDEFINED"
,    Epub = "EPUB"
}

export enum BooksVolumesListFilterEnum {
    FilterUndefined = "FILTER_UNDEFINED"
,    Ebooks = "ebooks"
,    FreeEbooks = "free-ebooks"
,    Full = "full"
,    PaidEbooks = "paid-ebooks"
,    Partial = "partial"
}

export enum BooksVolumesListLibraryRestrictEnum {
    LibraryRestrictUndefined = "LIBRARY_RESTRICT_UNDEFINED"
,    MyLibrary = "my-library"
,    NoRestrict = "no-restrict"
}

export enum BooksVolumesListMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
,    Mature = "MATURE"
,    NotMature = "not-mature"
}

export enum BooksVolumesListOrderByEnum {
    OrderByUndefined = "ORDER_BY_UNDEFINED"
,    Newest = "newest"
,    Relevance = "relevance"
}

export enum BooksVolumesListPrintTypeEnum {
    PrintTypeUndefined = "PRINT_TYPE_UNDEFINED"
,    All = "ALL"
,    Books = "BOOKS"
,    Magazines = "MAGAZINES"
}

export enum BooksVolumesListProjectionEnum {
    ProjectionUndefined = "PROJECTION_UNDEFINED"
,    Full = "FULL"
,    Lite = "LITE"
}


export class BooksVolumesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=download" })
  download?: BooksVolumesListDownloadEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: BooksVolumesListFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=langRestrict" })
  langRestrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=libraryRestrict" })
  libraryRestrict?: BooksVolumesListLibraryRestrictEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAllowedMaturityRating" })
  maxAllowedMaturityRating?: BooksVolumesListMaxAllowedMaturityRatingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: BooksVolumesListOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner" })
  partner?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=printType" })
  printType?: BooksVolumesListPrintTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: BooksVolumesListProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showPreorders" })
  showPreorders?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BooksVolumesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksVolumesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BooksVolumesListQueryParams;

  @Metadata()
  security: BooksVolumesListSecurity;
}


export class BooksVolumesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volumes?: shared.Volumes;
}
