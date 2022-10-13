from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documententity
from . import googleclouddocumentaiv1beta3documententityrelation
from . import googlerpcstatus
from . import googleclouddocumentaiv1beta3documentpage
from . import googleclouddocumentaiv1beta3documentrevision
from . import googleclouddocumentaiv1beta3documentshardinfo
from . import googleclouddocumentaiv1beta3documenttextchange
from . import googleclouddocumentaiv1beta3documentstyle


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3Document:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    entities: Optional[List[googleclouddocumentaiv1beta3documententity.GoogleCloudDocumentaiV1beta3DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    entity_relations: Optional[List[googleclouddocumentaiv1beta3documententityrelation.GoogleCloudDocumentaiV1beta3DocumentEntityRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityRelations' }})
    error: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    pages: Optional[List[googleclouddocumentaiv1beta3documentpage.GoogleCloudDocumentaiV1beta3DocumentPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    revisions: Optional[List[googleclouddocumentaiv1beta3documentrevision.GoogleCloudDocumentaiV1beta3DocumentRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    shard_info: Optional[googleclouddocumentaiv1beta3documentshardinfo.GoogleCloudDocumentaiV1beta3DocumentShardInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardInfo' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    text_changes: Optional[List[googleclouddocumentaiv1beta3documenttextchange.GoogleCloudDocumentaiV1beta3DocumentTextChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textChanges' }})
    text_styles: Optional[List[googleclouddocumentaiv1beta3documentstyle.GoogleCloudDocumentaiV1beta3DocumentStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyles' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
