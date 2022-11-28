from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetNewsArticlesPathParams:
    bill_id: int = field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNewsArticlesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNewsArticlesRequest:
    path_params: GetNewsArticlesPathParams = field()
    query_params: GetNewsArticlesQueryParams = field()
    

@dataclass
class GetNewsArticlesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    news_articles_summary_search_result: Optional[shared.NewsArticlesSummarySearchResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
