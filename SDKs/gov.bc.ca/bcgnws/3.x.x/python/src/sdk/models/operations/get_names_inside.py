from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetNamesInsideOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    CSV = "csv"

class GetNamesInsideOutputStyleEnum(str, Enum):
    SUMMARY = "summary"
    DETAIL = "detail"

class GetNamesInsideSortByEnum(str, Enum):
    NAME = "name"
    FEATURE_TYPE = "featureType"
    DECISION_DATE = "decisionDate"


@dataclass
class GetNamesInsideQueryParams:
    bbox: str = field(metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    output_format: GetNamesInsideOutputFormatEnum = field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    embed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    feature_category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'featureCategory', 'style': 'form', 'explode': True }})
    feature_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'featureClass', 'style': 'form', 'explode': True }})
    feature_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'featureType', 'style': 'form', 'explode': True }})
    items_per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'itemsPerPage', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    output_style: Optional[GetNamesInsideOutputStyleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'outputStyle', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetNamesInsideSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNamesInsideRequest:
    query_params: GetNamesInsideQueryParams = field()
    

@dataclass
class GetNamesInsideResponse:
    content_type: str = field()
    status_code: int = field()
    
