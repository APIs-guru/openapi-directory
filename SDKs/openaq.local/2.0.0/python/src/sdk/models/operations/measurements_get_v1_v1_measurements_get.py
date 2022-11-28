from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MeasurementsGetV1V1MeasurementsGetQueryParams:
    city: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    coordinates: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'coordinates', 'style': 'form', 'explode': True }})
    country: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    date_from: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    entity: Optional[shared.EntityTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entity', 'style': 'form', 'explode': True }})
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    has_geo: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'has_geo', 'style': 'form', 'explode': True }})
    include_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_fields', 'style': 'form', 'explode': True }})
    is_analysis: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isAnalysis', 'style': 'form', 'explode': True }})
    is_mobile: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMobile', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    location_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[shared.MeasOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parameter: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    parameter_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameter_id', 'style': 'form', 'explode': True }})
    project: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    sensor_type: Optional[shared.SensorTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sensorType', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    unit: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    value_from: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'value_from', 'style': 'form', 'explode': True }})
    value_to: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'value_to', 'style': 'form', 'explode': True }})
    

@dataclass
class MeasurementsGetV1V1MeasurementsGetRequest:
    query_params: MeasurementsGetV1V1MeasurementsGetQueryParams = field()
    

@dataclass
class MeasurementsGetV1V1MeasurementsGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    measurements_get_v1_v1_measurements_get_200_application_json_any: Optional[Any] = field(default=None)
    
