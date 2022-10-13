from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class HeadGenreImageByIndexPathParams:
    image_index: int = field(default=None, metadata={'path_param': { 'field_name': 'imageIndex', 'style': 'simple', 'explode': False }})
    image_type: shared.ImageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeadGenreImageByIndexQueryParams:
    add_played_indicator: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'addPlayedIndicator', 'style': 'form', 'explode': True }})
    background_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'backgroundColor', 'style': 'form', 'explode': True }})
    blur: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'blur', 'style': 'form', 'explode': True }})
    crop_whitespace: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'cropWhitespace', 'style': 'form', 'explode': True }})
    foreground_layer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'foregroundLayer', 'style': 'form', 'explode': True }})
    format: Optional[shared.ImageFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    max_height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxHeight', 'style': 'form', 'explode': True }})
    max_width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxWidth', 'style': 'form', 'explode': True }})
    percent_played: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'percentPlayed', 'style': 'form', 'explode': True }})
    quality: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    unplayed_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'unplayedCount', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class HeadGenreImageByIndexRequest:
    path_params: HeadGenreImageByIndexPathParams = field(default=None)
    query_params: HeadGenreImageByIndexQueryParams = field(default=None)
    

@dataclass
class HeadGenreImageByIndexResponse:
    content_type: str = field(default=None)
    head_genre_image_by_index_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
