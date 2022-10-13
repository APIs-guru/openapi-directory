from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DocumentOccurrence:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorComment' }})
    creators: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creators' }})
    document_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentComment' }})
    external_document_refs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDocumentRefs' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    license_list_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseListVersion' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
