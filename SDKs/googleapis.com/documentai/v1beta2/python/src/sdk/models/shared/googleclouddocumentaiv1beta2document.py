from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documententity
from . import googleclouddocumentaiv1beta2documententityrelation
from . import googlerpcstatus
from . import googleclouddocumentaiv1beta2documentlabel
from . import googleclouddocumentaiv1beta2documentpage
from . import googleclouddocumentaiv1beta2documentrevision
from . import googleclouddocumentaiv1beta2documentshardinfo
from . import googleclouddocumentaiv1beta2documenttextchange
from . import googleclouddocumentaiv1beta2documentstyle


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2Document:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    entities: Optional[List[googleclouddocumentaiv1beta2documententity.GoogleCloudDocumentaiV1beta2DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    entity_relations: Optional[List[googleclouddocumentaiv1beta2documententityrelation.GoogleCloudDocumentaiV1beta2DocumentEntityRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityRelations' }})
    error: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    labels: Optional[List[googleclouddocumentaiv1beta2documentlabel.GoogleCloudDocumentaiV1beta2DocumentLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    pages: Optional[List[googleclouddocumentaiv1beta2documentpage.GoogleCloudDocumentaiV1beta2DocumentPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    revisions: Optional[List[googleclouddocumentaiv1beta2documentrevision.GoogleCloudDocumentaiV1beta2DocumentRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    shard_info: Optional[googleclouddocumentaiv1beta2documentshardinfo.GoogleCloudDocumentaiV1beta2DocumentShardInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardInfo' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    text_changes: Optional[List[googleclouddocumentaiv1beta2documenttextchange.GoogleCloudDocumentaiV1beta2DocumentTextChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textChanges' }})
    text_styles: Optional[List[googleclouddocumentaiv1beta2documentstyle.GoogleCloudDocumentaiV1beta2DocumentStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyles' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
