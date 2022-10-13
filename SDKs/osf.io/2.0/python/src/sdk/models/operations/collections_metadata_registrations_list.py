from dataclasses import dataclass, field
from typing import List


@dataclass
class CollectionsMetadataRegistrationsListPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsMetadataRegistrationsListRequest:
    path_params: CollectionsMetadataRegistrationsListPathParams = field(default=None)
    

@dataclass
class CollectionsMetadataRegistrationsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
