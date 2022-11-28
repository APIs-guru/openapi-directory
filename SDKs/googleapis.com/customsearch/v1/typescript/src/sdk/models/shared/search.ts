import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";
import { Promotion } from "./promotion";



// SearchQueriesNextPage
/** 
 * Custom search request metadata.
**/
export class SearchQueriesNextPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cr" })
  cr?: string;

  @SpeakeasyMetadata({ data: "json, name=cx" })
  cx?: string;

  @SpeakeasyMetadata({ data: "json, name=dateRestrict" })
  dateRestrict?: string;

  @SpeakeasyMetadata({ data: "json, name=disableCnTwTranslation" })
  disableCnTwTranslation?: string;

  @SpeakeasyMetadata({ data: "json, name=exactTerms" })
  exactTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=excludeTerms" })
  excludeTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=gl" })
  gl?: string;

  @SpeakeasyMetadata({ data: "json, name=googleHost" })
  googleHost?: string;

  @SpeakeasyMetadata({ data: "json, name=highRange" })
  highRange?: string;

  @SpeakeasyMetadata({ data: "json, name=hl" })
  hl?: string;

  @SpeakeasyMetadata({ data: "json, name=hq" })
  hq?: string;

  @SpeakeasyMetadata({ data: "json, name=imgColorType" })
  imgColorType?: string;

  @SpeakeasyMetadata({ data: "json, name=imgDominantColor" })
  imgDominantColor?: string;

  @SpeakeasyMetadata({ data: "json, name=imgSize" })
  imgSize?: string;

  @SpeakeasyMetadata({ data: "json, name=imgType" })
  imgType?: string;

  @SpeakeasyMetadata({ data: "json, name=inputEncoding" })
  inputEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=linkSite" })
  linkSite?: string;

  @SpeakeasyMetadata({ data: "json, name=lowRange" })
  lowRange?: string;

  @SpeakeasyMetadata({ data: "json, name=orTerms" })
  orTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=outputEncoding" })
  outputEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedSite" })
  relatedSite?: string;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: string;

  @SpeakeasyMetadata({ data: "json, name=safe" })
  safe?: string;

  @SpeakeasyMetadata({ data: "json, name=searchTerms" })
  searchTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=searchType" })
  searchType?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearch" })
  siteSearch?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearchFilter" })
  siteSearchFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=startPage" })
  startPage?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchQueriesPreviousPage
/** 
 * Custom search request metadata.
**/
export class SearchQueriesPreviousPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cr" })
  cr?: string;

  @SpeakeasyMetadata({ data: "json, name=cx" })
  cx?: string;

  @SpeakeasyMetadata({ data: "json, name=dateRestrict" })
  dateRestrict?: string;

  @SpeakeasyMetadata({ data: "json, name=disableCnTwTranslation" })
  disableCnTwTranslation?: string;

  @SpeakeasyMetadata({ data: "json, name=exactTerms" })
  exactTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=excludeTerms" })
  excludeTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=gl" })
  gl?: string;

  @SpeakeasyMetadata({ data: "json, name=googleHost" })
  googleHost?: string;

  @SpeakeasyMetadata({ data: "json, name=highRange" })
  highRange?: string;

  @SpeakeasyMetadata({ data: "json, name=hl" })
  hl?: string;

  @SpeakeasyMetadata({ data: "json, name=hq" })
  hq?: string;

  @SpeakeasyMetadata({ data: "json, name=imgColorType" })
  imgColorType?: string;

  @SpeakeasyMetadata({ data: "json, name=imgDominantColor" })
  imgDominantColor?: string;

  @SpeakeasyMetadata({ data: "json, name=imgSize" })
  imgSize?: string;

  @SpeakeasyMetadata({ data: "json, name=imgType" })
  imgType?: string;

  @SpeakeasyMetadata({ data: "json, name=inputEncoding" })
  inputEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=linkSite" })
  linkSite?: string;

  @SpeakeasyMetadata({ data: "json, name=lowRange" })
  lowRange?: string;

  @SpeakeasyMetadata({ data: "json, name=orTerms" })
  orTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=outputEncoding" })
  outputEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedSite" })
  relatedSite?: string;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: string;

  @SpeakeasyMetadata({ data: "json, name=safe" })
  safe?: string;

  @SpeakeasyMetadata({ data: "json, name=searchTerms" })
  searchTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=searchType" })
  searchType?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearch" })
  siteSearch?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearchFilter" })
  siteSearchFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=startPage" })
  startPage?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchQueriesRequest
/** 
 * Custom search request metadata.
**/
export class SearchQueriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cr" })
  cr?: string;

  @SpeakeasyMetadata({ data: "json, name=cx" })
  cx?: string;

  @SpeakeasyMetadata({ data: "json, name=dateRestrict" })
  dateRestrict?: string;

  @SpeakeasyMetadata({ data: "json, name=disableCnTwTranslation" })
  disableCnTwTranslation?: string;

  @SpeakeasyMetadata({ data: "json, name=exactTerms" })
  exactTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=excludeTerms" })
  excludeTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=gl" })
  gl?: string;

  @SpeakeasyMetadata({ data: "json, name=googleHost" })
  googleHost?: string;

  @SpeakeasyMetadata({ data: "json, name=highRange" })
  highRange?: string;

  @SpeakeasyMetadata({ data: "json, name=hl" })
  hl?: string;

  @SpeakeasyMetadata({ data: "json, name=hq" })
  hq?: string;

  @SpeakeasyMetadata({ data: "json, name=imgColorType" })
  imgColorType?: string;

  @SpeakeasyMetadata({ data: "json, name=imgDominantColor" })
  imgDominantColor?: string;

  @SpeakeasyMetadata({ data: "json, name=imgSize" })
  imgSize?: string;

  @SpeakeasyMetadata({ data: "json, name=imgType" })
  imgType?: string;

  @SpeakeasyMetadata({ data: "json, name=inputEncoding" })
  inputEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=linkSite" })
  linkSite?: string;

  @SpeakeasyMetadata({ data: "json, name=lowRange" })
  lowRange?: string;

  @SpeakeasyMetadata({ data: "json, name=orTerms" })
  orTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=outputEncoding" })
  outputEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedSite" })
  relatedSite?: string;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: string;

  @SpeakeasyMetadata({ data: "json, name=safe" })
  safe?: string;

  @SpeakeasyMetadata({ data: "json, name=searchTerms" })
  searchTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=searchType" })
  searchType?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearch" })
  siteSearch?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSearchFilter" })
  siteSearchFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=startPage" })
  startPage?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchQueries
/** 
 * Query metadata for the previous, current, and next pages of results.
**/
export class SearchQueries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage", elemType: SearchQueriesNextPage })
  nextPage?: SearchQueriesNextPage[];

  @SpeakeasyMetadata({ data: "json, name=previousPage", elemType: SearchQueriesPreviousPage })
  previousPage?: SearchQueriesPreviousPage[];

  @SpeakeasyMetadata({ data: "json, name=request", elemType: SearchQueriesRequest })
  request?: SearchQueriesRequest[];
}


// SearchSearchInformation
/** 
 * Metadata about a search operation.
**/
export class SearchSearchInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedSearchTime" })
  formattedSearchTime?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedTotalResults" })
  formattedTotalResults?: string;

  @SpeakeasyMetadata({ data: "json, name=searchTime" })
  searchTime?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchSpelling
/** 
 * Spell correction information for a query.
**/
export class SearchSpelling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlCorrectedQuery" })
  htmlCorrectedQuery?: string;
}


// SearchUrl
/** 
 * OpenSearch template and URL.
**/
export class SearchUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// Search
/** 
 * Response to a custom search request.
**/
export class Search extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Result })
  items?: Result[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: Promotion })
  promotions?: Promotion[];

  @SpeakeasyMetadata({ data: "json, name=queries" })
  queries?: SearchQueries;

  @SpeakeasyMetadata({ data: "json, name=searchInformation" })
  searchInformation?: SearchSearchInformation;

  @SpeakeasyMetadata({ data: "json, name=spelling" })
  spelling?: SearchSpelling;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: SearchUrl;
}
