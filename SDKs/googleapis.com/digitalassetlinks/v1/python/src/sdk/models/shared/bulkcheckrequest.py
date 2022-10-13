from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asset
from . import asset
from . import statementtemplate


@dataclass_json
@dataclass
class BulkCheckRequest:
    allow_google_internal_data_sources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowGoogleInternalDataSources' }})
    default_relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultRelation' }})
    default_source: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSource' }})
    default_target: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTarget' }})
    skip_cache_lookup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipCacheLookup' }})
    statements: Optional[List[statementtemplate.StatementTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statements' }})
    
