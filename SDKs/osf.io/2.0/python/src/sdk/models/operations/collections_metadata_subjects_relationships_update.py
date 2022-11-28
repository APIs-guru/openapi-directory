from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any


@dataclass
class CollectionsMetadataSubjectsRelationshipsUpdatePathParams:
    cgm_id: str = field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsMetadataSubjectsRelationshipsUpdateRequest:
    path_params: CollectionsMetadataSubjectsRelationshipsUpdatePathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsMetadataSubjectsRelationshipsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
