from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streamingcomputationconfig


@dataclass_json
@dataclass
class StreamingConfigTask:
    commit_stream_chunk_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitStreamChunkSizeBytes' }})
    get_data_stream_chunk_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'getDataStreamChunkSizeBytes' }})
    max_work_item_commit_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWorkItemCommitBytes' }})
    streaming_computation_configs: Optional[List[streamingcomputationconfig.StreamingComputationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingComputationConfigs' }})
    user_step_to_state_family_name_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userStepToStateFamilyNameMap' }})
    windmill_service_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windmillServiceEndpoint' }})
    windmill_service_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windmillServicePort' }})
    
