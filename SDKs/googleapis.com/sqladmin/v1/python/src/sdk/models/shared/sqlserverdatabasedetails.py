from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SQLServerDatabaseDetails:
    r"""SQLServerDatabaseDetails
    Represents a Sql Server database on the Cloud SQL instance.
    """
    
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibilityLevel') }})
    recovery_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryModel') }})
    
