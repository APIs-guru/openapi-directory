from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IngestionInfo:
    backup_ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupIngestionAddress' }})
    ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingestionAddress' }})
    rtmps_backup_ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rtmpsBackupIngestionAddress' }})
    rtmps_ingestion_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rtmpsIngestionAddress' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamName' }})
    
