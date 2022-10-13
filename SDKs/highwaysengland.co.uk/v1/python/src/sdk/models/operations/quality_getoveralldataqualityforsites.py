from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QualityGetOverallDataQualityForSitesPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class QualityGetOverallDataQualityForSitesQueryParams:
    end_date: str = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    sites: str = field(default=None, metadata={'query_param': { 'field_name': 'sites', 'style': 'form', 'explode': True }})
    start_date: str = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class QualityGetOverallDataQualityForSitesRequest:
    path_params: QualityGetOverallDataQualityForSitesPathParams = field(default=None)
    query_params: QualityGetOverallDataQualityForSitesQueryParams = field(default=None)
    

@dataclass
class QualityGetOverallDataQualityForSitesResponse:
    content_type: str = field(default=None)
    overall_quality_response: Optional[shared.OverallQualityResponse] = field(default=None)
    status_code: int = field(default=None)
    
