from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UpdateAMediaItemRequestBody:
    description: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    max_downloads_allowed: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'max_downloads_allowed' }})
    metadata_primary: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'metadata_primary' }})
    metadata_secondary: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'metadata_secondary' }})
    mime_type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'mime_type' }})
    public: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'public' }})
    title: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclass
class UpdateAMediaItemRequest:
    request: Optional[UpdateAMediaItemRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UpdateAMediaItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
