from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deidentifyconfig
from . import fhirfilter


@dataclass_json
@dataclass
class DeidentifyFhirStoreRequest:
    config: Optional[deidentifyconfig.DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    destination_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationStore' }})
    gcs_config_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsConfigUri' }})
    resource_filter: Optional[fhirfilter.FhirFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceFilter' }})
    skip_modified_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipModifiedResources' }})
    
