from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetVVersionReportsStartDateToEndDateReportTypePathParams:
    end_date: str = field(metadata={'path_param': { 'field_name': 'end_date', 'style': 'simple', 'explode': False }})
    report_type: str = field(metadata={'path_param': { 'field_name': 'report_type', 'style': 'simple', 'explode': False }})
    start_date: str = field(metadata={'path_param': { 'field_name': 'start_date', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVVersionReportsStartDateToEndDateReportTypeQueryParams:
    page: int = field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: int = field(metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sites: str = field(metadata={'query_param': { 'field_name': 'sites', 'style': 'form', 'explode': True }})
    report_sub_type_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'reportSubTypeId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVVersionReportsStartDateToEndDateReportTypeRequest:
    path_params: GetVVersionReportsStartDateToEndDateReportTypePathParams = field()
    query_params: GetVVersionReportsStartDateToEndDateReportTypeQueryParams = field()
    

@dataclass
class GetVVersionReportsStartDateToEndDateReportTypeResponse:
    content_type: str = field()
    status_code: int = field()
    object: Optional[dict[str, Any]] = field(default=None)
    
