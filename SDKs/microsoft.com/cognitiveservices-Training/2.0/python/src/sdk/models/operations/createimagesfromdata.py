from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateImagesFromDataPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateImagesFromDataQueryParams:
    tag_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class CreateImagesFromDataHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class CreateImagesFromDataRequestBodyImageData:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_data: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclass
class CreateImagesFromDataRequestBody:
    image_data: CreateImagesFromDataRequestBodyImageData = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class CreateImagesFromDataRequest:
    path_params: CreateImagesFromDataPathParams = field(default=None)
    query_params: CreateImagesFromDataQueryParams = field(default=None)
    headers: CreateImagesFromDataHeaders = field(default=None)
    request: CreateImagesFromDataRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class CreateImagesFromDataResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_create_summary: Optional[shared.ImageCreateSummary] = field(default=None)
    status_code: int = field(default=None)
    
