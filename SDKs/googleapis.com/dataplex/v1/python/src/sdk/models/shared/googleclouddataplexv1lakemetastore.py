from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1LakeMetastore:
    r"""GoogleCloudDataplexV1LakeMetastore
    Settings to manage association of Dataproc Metastore with a lake.
    """
    
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
