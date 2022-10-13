from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contextattribute
from . import interaction
from . import searchqualitymetadata


@dataclass_json
@dataclass
class ItemMetadata:
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLanguage' }})
    context_attributes: Optional[List[contextattribute.ContextAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextAttributes' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    interactions: Optional[List[interaction.Interaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywords' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    search_quality_metadata: Optional[searchqualitymetadata.SearchQualityMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchQualityMetadata' }})
    source_repository_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceRepositoryUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
