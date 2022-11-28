from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateImagesFromDataPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateImagesFromDataQueryParams:
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class CreateImagesFromDataHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateImagesFromDataRequestBodyImageData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_data: str = field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclass
class CreateImagesFromDataRequestBody:
    image_data: CreateImagesFromDataRequestBodyImageData = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class CreateImagesFromDataRequest:
    headers: CreateImagesFromDataHeaders = field()
    path_params: CreateImagesFromDataPathParams = field()
    query_params: CreateImagesFromDataQueryParams = field()
    request: CreateImagesFromDataRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class CreateImagesFromDataResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_create_summary: Optional[shared.ImageCreateSummary] = field(default=None)
    
