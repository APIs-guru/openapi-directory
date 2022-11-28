from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class HeadItemImage2PathParams:
    format: shared.ImageFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    image_index: int = field(metadata={'path_param': { 'field_name': 'imageIndex', 'style': 'simple', 'explode': False }})
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    max_height: int = field(metadata={'path_param': { 'field_name': 'maxHeight', 'style': 'simple', 'explode': False }})
    max_width: int = field(metadata={'path_param': { 'field_name': 'maxWidth', 'style': 'simple', 'explode': False }})
    percent_played: float = field(metadata={'path_param': { 'field_name': 'percentPlayed', 'style': 'simple', 'explode': False }})
    tag: str = field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    unplayed_count: int = field(metadata={'path_param': { 'field_name': 'unplayedCount', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeadItemImage2QueryParams:
    add_played_indicator: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'addPlayedIndicator', 'style': 'form', 'explode': True }})
    background_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'backgroundColor', 'style': 'form', 'explode': True }})
    blur: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'blur', 'style': 'form', 'explode': True }})
    crop_whitespace: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'cropWhitespace', 'style': 'form', 'explode': True }})
    foreground_layer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'foregroundLayer', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class HeadItemImage2Request:
    path_params: HeadItemImage2PathParams = field()
    query_params: HeadItemImage2QueryParams = field()
    

@dataclass
class HeadItemImage2Response:
    content_type: str = field()
    status_code: int = field()
    head_item_image2_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
