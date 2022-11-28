from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetLabelsRequest:
    r"""SetLabelsRequest
    SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    label_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelFingerprint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    resource_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLabels') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
