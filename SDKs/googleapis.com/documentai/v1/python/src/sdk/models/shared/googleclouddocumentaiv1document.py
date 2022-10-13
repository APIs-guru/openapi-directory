from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documententity
from . import googleclouddocumentaiv1documententityrelation
from . import googlerpcstatus
from . import googleclouddocumentaiv1documentpage
from . import googleclouddocumentaiv1documentrevision
from . import googleclouddocumentaiv1documentshardinfo
from . import googleclouddocumentaiv1documenttextchange
from . import googleclouddocumentaiv1documentstyle


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1Document:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    entities: Optional[List[googleclouddocumentaiv1documententity.GoogleCloudDocumentaiV1DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    entity_relations: Optional[List[googleclouddocumentaiv1documententityrelation.GoogleCloudDocumentaiV1DocumentEntityRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityRelations' }})
    error: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    pages: Optional[List[googleclouddocumentaiv1documentpage.GoogleCloudDocumentaiV1DocumentPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    revisions: Optional[List[googleclouddocumentaiv1documentrevision.GoogleCloudDocumentaiV1DocumentRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    shard_info: Optional[googleclouddocumentaiv1documentshardinfo.GoogleCloudDocumentaiV1DocumentShardInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardInfo' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    text_changes: Optional[List[googleclouddocumentaiv1documenttextchange.GoogleCloudDocumentaiV1DocumentTextChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textChanges' }})
    text_styles: Optional[List[googleclouddocumentaiv1documentstyle.GoogleCloudDocumentaiV1DocumentStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyles' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
