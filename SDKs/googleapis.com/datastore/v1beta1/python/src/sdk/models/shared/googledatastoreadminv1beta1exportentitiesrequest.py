from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledatastoreadminv1beta1entityfilter


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1beta1ExportEntitiesRequest:
    entity_filter: Optional[googledatastoreadminv1beta1entityfilter.GoogleDatastoreAdminV1beta1EntityFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityFilter' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    output_url_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputUrlPrefix' }})
    
