from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatabaseConfig:
    r"""DatabaseConfig
    The configuration of Cloud SQL instance that is used by the Apache Airflow software.
    """
    
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    
