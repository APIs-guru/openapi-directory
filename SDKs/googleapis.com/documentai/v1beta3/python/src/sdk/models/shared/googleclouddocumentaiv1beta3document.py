from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3Document:
    r"""GoogleCloudDocumentaiV1beta3Document
    Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    entities: Optional[List[GoogleCloudDocumentaiV1beta3DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    entity_relations: Optional[List[GoogleCloudDocumentaiV1beta3DocumentEntityRelation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityRelations') }})
    error: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    pages: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    revisions: Optional[List[GoogleCloudDocumentaiV1beta3DocumentRevision]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    shard_info: Optional[GoogleCloudDocumentaiV1beta3DocumentShardInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardInfo') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    text_changes: Optional[List[GoogleCloudDocumentaiV1beta3DocumentTextChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textChanges') }})
    text_styles: Optional[List[GoogleCloudDocumentaiV1beta3DocumentStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyles') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
