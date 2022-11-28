from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class QualityGetOverallDataQualityForSitesPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class QualityGetOverallDataQualityForSitesQueryParams:
    end_date: str = field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    sites: str = field(metadata={'query_param': { 'field_name': 'sites', 'style': 'form', 'explode': True }})
    start_date: str = field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class QualityGetOverallDataQualityForSitesRequest:
    path_params: QualityGetOverallDataQualityForSitesPathParams = field()
    query_params: QualityGetOverallDataQualityForSitesQueryParams = field()
    

@dataclass
class QualityGetOverallDataQualityForSitesResponse:
    content_type: str = field()
    status_code: int = field()
    overall_quality_response: Optional[shared.OverallQualityResponse] = field(default=None)
    
