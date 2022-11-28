from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IngestionInfo:
    r"""IngestionInfo
    Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
    """
    
    backup_ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupIngestionAddress') }})
    ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestionAddress') }})
    rtmps_backup_ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rtmpsBackupIngestionAddress') }})
    rtmps_ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rtmpsIngestionAddress') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    
