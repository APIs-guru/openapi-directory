from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import pagemetadata
from . import sentryimpactriskobject


@dataclass_json
@dataclass
class SentryObjectPagingDto:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[pagemetadata.PageMetaData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    sentry_objects: Optional[List[sentryimpactriskobject.SentryImpactRiskObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentry_objects' }})
    
