from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaIDSyndicateFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDSyndicateFormatQueryParams:
    autoplay: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoplay', 'style': 'form', 'explode': False }})
    css_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cssClass', 'style': 'form', 'explode': False }})
    font_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'font-size', 'style': 'form', 'explode': False }})
    image_float: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imageFloat', 'style': 'form', 'explode': False }})
    image_margin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imageMargin', 'style': 'form', 'explode': False }})
    rel: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'rel', 'style': 'form', 'explode': False }})
    strip_breaks: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stripBreaks', 'style': 'form', 'explode': False }})
    strip_classes: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stripClasses', 'style': 'form', 'explode': False }})
    strip_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stripImages', 'style': 'form', 'explode': False }})
    strip_scripts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stripScripts', 'style': 'form', 'explode': False }})
    strip_styles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stripStyles', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDSyndicateFormatRequest:
    path_params: GetResourcesMediaIDSyndicateFormatPathParams = field()
    query_params: GetResourcesMediaIDSyndicateFormatQueryParams = field()
    

@dataclass
class GetResourcesMediaIDSyndicateFormatResponse:
    content_type: str = field()
    status_code: int = field()
    syndicate_marshaller_wrapped: Optional[shared.SyndicateMarshallerWrapped] = field(default=None)
    
