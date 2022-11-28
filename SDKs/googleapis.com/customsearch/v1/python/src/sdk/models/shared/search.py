from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchQueriesNextPage:
    r"""SearchQueriesNextPage
    Custom search request metadata.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    cr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cr') }})
    cx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cx') }})
    date_restrict: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRestrict') }})
    disable_cn_tw_translation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableCnTwTranslation') }})
    exact_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactTerms') }})
    exclude_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeTerms') }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    gl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gl') }})
    google_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleHost') }})
    high_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highRange') }})
    hl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hl') }})
    hq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hq') }})
    img_color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgColorType') }})
    img_dominant_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgDominantColor') }})
    img_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgSize') }})
    img_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgType') }})
    input_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputEncoding') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    link_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkSite') }})
    low_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowRange') }})
    or_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orTerms') }})
    output_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputEncoding') }})
    related_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedSite') }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights') }})
    safe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe') }})
    search_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTerms') }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    site_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearch') }})
    site_search_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearchFilter') }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    start_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startPage') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    

@dataclass_json
@dataclass
class SearchQueriesPreviousPage:
    r"""SearchQueriesPreviousPage
    Custom search request metadata.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    cr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cr') }})
    cx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cx') }})
    date_restrict: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRestrict') }})
    disable_cn_tw_translation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableCnTwTranslation') }})
    exact_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactTerms') }})
    exclude_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeTerms') }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    gl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gl') }})
    google_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleHost') }})
    high_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highRange') }})
    hl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hl') }})
    hq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hq') }})
    img_color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgColorType') }})
    img_dominant_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgDominantColor') }})
    img_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgSize') }})
    img_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgType') }})
    input_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputEncoding') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    link_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkSite') }})
    low_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowRange') }})
    or_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orTerms') }})
    output_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputEncoding') }})
    related_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedSite') }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights') }})
    safe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe') }})
    search_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTerms') }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    site_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearch') }})
    site_search_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearchFilter') }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    start_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startPage') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    

@dataclass_json
@dataclass
class SearchQueriesRequest:
    r"""SearchQueriesRequest
    Custom search request metadata.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    cr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cr') }})
    cx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cx') }})
    date_restrict: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRestrict') }})
    disable_cn_tw_translation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableCnTwTranslation') }})
    exact_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactTerms') }})
    exclude_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeTerms') }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    gl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gl') }})
    google_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleHost') }})
    high_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highRange') }})
    hl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hl') }})
    hq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hq') }})
    img_color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgColorType') }})
    img_dominant_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgDominantColor') }})
    img_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgSize') }})
    img_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imgType') }})
    input_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputEncoding') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    link_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkSite') }})
    low_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowRange') }})
    or_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orTerms') }})
    output_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputEncoding') }})
    related_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedSite') }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rights') }})
    safe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe') }})
    search_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTerms') }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    site_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearch') }})
    site_search_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSearchFilter') }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    start_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startPage') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    

@dataclass_json
@dataclass
class SearchQueries:
    r"""SearchQueries
    Query metadata for the previous, current, and next pages of results.
    """
    
    next_page: Optional[List[SearchQueriesNextPage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    previous_page: Optional[List[SearchQueriesPreviousPage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousPage') }})
    request: Optional[List[SearchQueriesRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    

@dataclass_json
@dataclass
class SearchSearchInformation:
    r"""SearchSearchInformation
    Metadata about a search operation.
    """
    
    formatted_search_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedSearchTime') }})
    formatted_total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedTotalResults') }})
    search_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTime') }})
    total_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    

@dataclass_json
@dataclass
class SearchSpelling:
    r"""SearchSpelling
    Spell correction information for a query.
    """
    
    corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctedQuery') }})
    html_corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlCorrectedQuery') }})
    

@dataclass_json
@dataclass
class SearchURL:
    r"""SearchURL
    OpenSearch template and URL.
    """
    
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Search:
    r"""Search
    Response to a custom search request.
    """
    
    context: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    items: Optional[List[Result]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    promotions: Optional[List[Promotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    queries: Optional[SearchQueries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    search_information: Optional[SearchSearchInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchInformation') }})
    spelling: Optional[SearchSpelling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spelling') }})
    url: Optional[SearchURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
