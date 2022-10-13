from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import result
from . import promotion


@dataclass_json
@dataclass
class SearchQueriesNextPage:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cr' }})
    cx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cx' }})
    date_restrict: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRestrict' }})
    disable_cn_tw_translation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableCnTwTranslation' }})
    exact_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactTerms' }})
    exclude_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeTerms' }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    gl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gl' }})
    google_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleHost' }})
    high_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highRange' }})
    hl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hl' }})
    hq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hq' }})
    img_color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgColorType' }})
    img_dominant_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgDominantColor' }})
    img_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgSize' }})
    img_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgType' }})
    input_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputEncoding' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    link_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkSite' }})
    low_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowRange' }})
    or_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orTerms' }})
    output_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputEncoding' }})
    related_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedSite' }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rights' }})
    safe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe' }})
    search_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchTerms' }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchType' }})
    site_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearch' }})
    site_search_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearchFilter' }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    start_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startPage' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    

@dataclass_json
@dataclass
class SearchQueriesPreviousPage:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cr' }})
    cx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cx' }})
    date_restrict: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRestrict' }})
    disable_cn_tw_translation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableCnTwTranslation' }})
    exact_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactTerms' }})
    exclude_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeTerms' }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    gl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gl' }})
    google_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleHost' }})
    high_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highRange' }})
    hl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hl' }})
    hq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hq' }})
    img_color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgColorType' }})
    img_dominant_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgDominantColor' }})
    img_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgSize' }})
    img_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgType' }})
    input_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputEncoding' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    link_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkSite' }})
    low_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowRange' }})
    or_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orTerms' }})
    output_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputEncoding' }})
    related_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedSite' }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rights' }})
    safe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe' }})
    search_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchTerms' }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchType' }})
    site_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearch' }})
    site_search_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearchFilter' }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    start_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startPage' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    

@dataclass_json
@dataclass
class SearchQueriesRequest:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cr' }})
    cx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cx' }})
    date_restrict: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRestrict' }})
    disable_cn_tw_translation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableCnTwTranslation' }})
    exact_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactTerms' }})
    exclude_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeTerms' }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    gl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gl' }})
    google_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleHost' }})
    high_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highRange' }})
    hl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hl' }})
    hq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hq' }})
    img_color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgColorType' }})
    img_dominant_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgDominantColor' }})
    img_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgSize' }})
    img_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgType' }})
    input_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputEncoding' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    link_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkSite' }})
    low_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowRange' }})
    or_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orTerms' }})
    output_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputEncoding' }})
    related_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedSite' }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rights' }})
    safe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe' }})
    search_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchTerms' }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchType' }})
    site_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearch' }})
    site_search_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSearchFilter' }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    start_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startPage' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    

@dataclass_json
@dataclass
class SearchQueries:
    next_page: Optional[List[SearchQueriesNextPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPage' }})
    previous_page: Optional[List[SearchQueriesPreviousPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousPage' }})
    request: Optional[List[SearchQueriesRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    

@dataclass_json
@dataclass
class SearchSearchInformation:
    formatted_search_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedSearchTime' }})
    formatted_total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedTotalResults' }})
    search_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchTime' }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    

@dataclass_json
@dataclass
class SearchSpelling:
    corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedQuery' }})
    html_corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlCorrectedQuery' }})
    

@dataclass_json
@dataclass
class SearchURL:
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Search:
    context: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    items: Optional[List[result.Result]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    promotions: Optional[List[promotion.Promotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    queries: Optional[SearchQueries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queries' }})
    search_information: Optional[SearchSearchInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchInformation' }})
    spelling: Optional[SearchSpelling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spelling' }})
    url: Optional[SearchURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
