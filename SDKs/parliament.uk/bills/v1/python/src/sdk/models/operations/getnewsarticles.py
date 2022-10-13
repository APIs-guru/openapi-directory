from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetNewsArticlesPathParams:
    bill_id: int = field(default=None, metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNewsArticlesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNewsArticlesRequest:
    path_params: GetNewsArticlesPathParams = field(default=None)
    query_params: GetNewsArticlesQueryParams = field(default=None)
    

@dataclass
class GetNewsArticlesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    news_articles_summary_search_result: Optional[shared.NewsArticlesSummarySearchResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
