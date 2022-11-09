import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Result } from "./result";
import { Promotion } from "./promotion";


// SearchQueriesNextPage
/** 
 * Custom search request metadata.
**/
export class SearchQueriesNextPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cr" })
  cr?: string;

  @Metadata({ data: "json, name=cx" })
  cx?: string;

  @Metadata({ data: "json, name=dateRestrict" })
  dateRestrict?: string;

  @Metadata({ data: "json, name=disableCnTwTranslation" })
  disableCnTwTranslation?: string;

  @Metadata({ data: "json, name=exactTerms" })
  exactTerms?: string;

  @Metadata({ data: "json, name=excludeTerms" })
  excludeTerms?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=gl" })
  gl?: string;

  @Metadata({ data: "json, name=googleHost" })
  googleHost?: string;

  @Metadata({ data: "json, name=highRange" })
  highRange?: string;

  @Metadata({ data: "json, name=hl" })
  hl?: string;

  @Metadata({ data: "json, name=hq" })
  hq?: string;

  @Metadata({ data: "json, name=imgColorType" })
  imgColorType?: string;

  @Metadata({ data: "json, name=imgDominantColor" })
  imgDominantColor?: string;

  @Metadata({ data: "json, name=imgSize" })
  imgSize?: string;

  @Metadata({ data: "json, name=imgType" })
  imgType?: string;

  @Metadata({ data: "json, name=inputEncoding" })
  inputEncoding?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=linkSite" })
  linkSite?: string;

  @Metadata({ data: "json, name=lowRange" })
  lowRange?: string;

  @Metadata({ data: "json, name=orTerms" })
  orTerms?: string;

  @Metadata({ data: "json, name=outputEncoding" })
  outputEncoding?: string;

  @Metadata({ data: "json, name=relatedSite" })
  relatedSite?: string;

  @Metadata({ data: "json, name=rights" })
  rights?: string;

  @Metadata({ data: "json, name=safe" })
  safe?: string;

  @Metadata({ data: "json, name=searchTerms" })
  searchTerms?: string;

  @Metadata({ data: "json, name=searchType" })
  searchType?: string;

  @Metadata({ data: "json, name=siteSearch" })
  siteSearch?: string;

  @Metadata({ data: "json, name=siteSearchFilter" })
  siteSearchFilter?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=startPage" })
  startPage?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchQueriesPreviousPage
/** 
 * Custom search request metadata.
**/
export class SearchQueriesPreviousPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cr" })
  cr?: string;

  @Metadata({ data: "json, name=cx" })
  cx?: string;

  @Metadata({ data: "json, name=dateRestrict" })
  dateRestrict?: string;

  @Metadata({ data: "json, name=disableCnTwTranslation" })
  disableCnTwTranslation?: string;

  @Metadata({ data: "json, name=exactTerms" })
  exactTerms?: string;

  @Metadata({ data: "json, name=excludeTerms" })
  excludeTerms?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=gl" })
  gl?: string;

  @Metadata({ data: "json, name=googleHost" })
  googleHost?: string;

  @Metadata({ data: "json, name=highRange" })
  highRange?: string;

  @Metadata({ data: "json, name=hl" })
  hl?: string;

  @Metadata({ data: "json, name=hq" })
  hq?: string;

  @Metadata({ data: "json, name=imgColorType" })
  imgColorType?: string;

  @Metadata({ data: "json, name=imgDominantColor" })
  imgDominantColor?: string;

  @Metadata({ data: "json, name=imgSize" })
  imgSize?: string;

  @Metadata({ data: "json, name=imgType" })
  imgType?: string;

  @Metadata({ data: "json, name=inputEncoding" })
  inputEncoding?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=linkSite" })
  linkSite?: string;

  @Metadata({ data: "json, name=lowRange" })
  lowRange?: string;

  @Metadata({ data: "json, name=orTerms" })
  orTerms?: string;

  @Metadata({ data: "json, name=outputEncoding" })
  outputEncoding?: string;

  @Metadata({ data: "json, name=relatedSite" })
  relatedSite?: string;

  @Metadata({ data: "json, name=rights" })
  rights?: string;

  @Metadata({ data: "json, name=safe" })
  safe?: string;

  @Metadata({ data: "json, name=searchTerms" })
  searchTerms?: string;

  @Metadata({ data: "json, name=searchType" })
  searchType?: string;

  @Metadata({ data: "json, name=siteSearch" })
  siteSearch?: string;

  @Metadata({ data: "json, name=siteSearchFilter" })
  siteSearchFilter?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=startPage" })
  startPage?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchQueriesRequest
/** 
 * Custom search request metadata.
**/
export class SearchQueriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cr" })
  cr?: string;

  @Metadata({ data: "json, name=cx" })
  cx?: string;

  @Metadata({ data: "json, name=dateRestrict" })
  dateRestrict?: string;

  @Metadata({ data: "json, name=disableCnTwTranslation" })
  disableCnTwTranslation?: string;

  @Metadata({ data: "json, name=exactTerms" })
  exactTerms?: string;

  @Metadata({ data: "json, name=excludeTerms" })
  excludeTerms?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=gl" })
  gl?: string;

  @Metadata({ data: "json, name=googleHost" })
  googleHost?: string;

  @Metadata({ data: "json, name=highRange" })
  highRange?: string;

  @Metadata({ data: "json, name=hl" })
  hl?: string;

  @Metadata({ data: "json, name=hq" })
  hq?: string;

  @Metadata({ data: "json, name=imgColorType" })
  imgColorType?: string;

  @Metadata({ data: "json, name=imgDominantColor" })
  imgDominantColor?: string;

  @Metadata({ data: "json, name=imgSize" })
  imgSize?: string;

  @Metadata({ data: "json, name=imgType" })
  imgType?: string;

  @Metadata({ data: "json, name=inputEncoding" })
  inputEncoding?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=linkSite" })
  linkSite?: string;

  @Metadata({ data: "json, name=lowRange" })
  lowRange?: string;

  @Metadata({ data: "json, name=orTerms" })
  orTerms?: string;

  @Metadata({ data: "json, name=outputEncoding" })
  outputEncoding?: string;

  @Metadata({ data: "json, name=relatedSite" })
  relatedSite?: string;

  @Metadata({ data: "json, name=rights" })
  rights?: string;

  @Metadata({ data: "json, name=safe" })
  safe?: string;

  @Metadata({ data: "json, name=searchTerms" })
  searchTerms?: string;

  @Metadata({ data: "json, name=searchType" })
  searchType?: string;

  @Metadata({ data: "json, name=siteSearch" })
  siteSearch?: string;

  @Metadata({ data: "json, name=siteSearchFilter" })
  siteSearchFilter?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=startPage" })
  startPage?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchQueries
/** 
 * Query metadata for the previous, current, and next pages of results.
**/
export class SearchQueries extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPage", elemType: shared.SearchQueriesNextPage })
  nextPage?: SearchQueriesNextPage[];

  @Metadata({ data: "json, name=previousPage", elemType: shared.SearchQueriesPreviousPage })
  previousPage?: SearchQueriesPreviousPage[];

  @Metadata({ data: "json, name=request", elemType: shared.SearchQueriesRequest })
  request?: SearchQueriesRequest[];
}


// SearchSearchInformation
/** 
 * Metadata about a search operation.
**/
export class SearchSearchInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedSearchTime" })
  formattedSearchTime?: string;

  @Metadata({ data: "json, name=formattedTotalResults" })
  formattedTotalResults?: string;

  @Metadata({ data: "json, name=searchTime" })
  searchTime?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: string;
}


// SearchSpelling
/** 
 * Spell correction information for a query.
**/
export class SearchSpelling extends SpeakeasyBase {
  @Metadata({ data: "json, name=correctedQuery" })
  correctedQuery?: string;

  @Metadata({ data: "json, name=htmlCorrectedQuery" })
  htmlCorrectedQuery?: string;
}


// SearchUrl
/** 
 * OpenSearch template and URL.
**/
export class SearchUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// Search
/** 
 * Response to a custom search request.
**/
export class Search extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: Map<string, any>;

  @Metadata({ data: "json, name=items", elemType: shared.Result })
  items?: Result[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.Promotion })
  promotions?: Promotion[];

  @Metadata({ data: "json, name=queries" })
  queries?: SearchQueries;

  @Metadata({ data: "json, name=searchInformation" })
  searchInformation?: SearchSearchInformation;

  @Metadata({ data: "json, name=spelling" })
  spelling?: SearchSpelling;

  @Metadata({ data: "json, name=url" })
  url?: SearchUrl;
}
