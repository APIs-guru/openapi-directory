from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildapproval
from . import artifacts
from . import secrets
from . import failureinfo
from . import buildoptions
from . import results
from . import secret
from . import source
from . import sourceprovenance
from . import buildstep
from . import timespan
from . import warning

class BuildStatusEnum(str, Enum):
    STATUS_UNKNOWN = "STATUS_UNKNOWN"
    PENDING = "PENDING"
    QUEUED = "QUEUED"
    WORKING = "WORKING"
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    TIMEOUT = "TIMEOUT"
    CANCELLED = "CANCELLED"
    EXPIRED = "EXPIRED"


@dataclass_json
@dataclass
class Build:
    approval: Optional[buildapproval.BuildApproval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approval' }})
    artifacts: Optional[artifacts.Artifacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    available_secrets: Optional[secrets.Secrets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableSecrets' }})
    build_trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildTriggerId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    failure_info: Optional[failureinfo.FailureInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureInfo' }})
    finish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logUrl' }})
    logs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logsBucket' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[buildoptions.BuildOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    queue_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueTtl' }})
    results: Optional[results.Results] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    secrets: Optional[List[secret.Secret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_provenance: Optional[sourceprovenance.SourceProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProvenance' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[BuildStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusDetail' }})
    steps: Optional[List[buildstep.BuildStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    substitutions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'substitutions' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    timing: Optional[dict[str, timespan.TimeSpan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timing' }})
    warnings: Optional[List[warning.Warning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
