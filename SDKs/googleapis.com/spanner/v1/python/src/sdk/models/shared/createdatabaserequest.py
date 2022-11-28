from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreateDatabaseRequestDatabaseDialectEnum(str, Enum):
    DATABASE_DIALECT_UNSPECIFIED = "DATABASE_DIALECT_UNSPECIFIED"
    GOOGLE_STANDARD_SQL = "GOOGLE_STANDARD_SQL"
    POSTGRESQL = "POSTGRESQL"


@dataclass_json
@dataclass
class CreateDatabaseRequest:
    r"""CreateDatabaseRequest
    The request for CreateDatabase.
    """
    
    create_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createStatement') }})
    database_dialect: Optional[CreateDatabaseRequestDatabaseDialectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseDialect') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    extra_statements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraStatements') }})
    
