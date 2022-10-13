from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class Locationsv1GetV1LocationsLocationIDGetPathParams:
    location_id: int = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class Locationsv1GetV1LocationsLocationIDGetQueryParams:
    city: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    coordinates: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'coordinates', 'style': 'form', 'explode': True }})
    country: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    dump_raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'dumpRaw', 'style': 'form', 'explode': True }})
    entity: Optional[shared.EntityTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entity', 'style': 'form', 'explode': True }})
    has_geo: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'has_geo', 'style': 'form', 'explode': True }})
    is_analysis: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isAnalysis', 'style': 'form', 'explode': True }})
    is_mobile: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMobile', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    manufacturer_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturerName', 'style': 'form', 'explode': True }})
    model_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[shared.LocationsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parameter: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    parameter_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameter_id', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    sensor_type: Optional[shared.SensorTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sensorType', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sourceName', 'style': 'form', 'explode': True }})
    unit: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclass
class Locationsv1GetV1LocationsLocationIDGetRequest:
    path_params: Locationsv1GetV1LocationsLocationIDGetPathParams = field(default=None)
    query_params: Locationsv1GetV1LocationsLocationIDGetQueryParams = field(default=None)
    

@dataclass
class Locationsv1GetV1LocationsLocationIDGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    open_aq_result: Optional[shared.OpenAqResult] = field(default=None)
    status_code: int = field(default=None)
    
