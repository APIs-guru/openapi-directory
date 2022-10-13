from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfig

class CreateDatabaseRequestDatabaseDialectEnum(str, Enum):
    DATABASE_DIALECT_UNSPECIFIED = "DATABASE_DIALECT_UNSPECIFIED"
    GOOGLE_STANDARD_SQL = "GOOGLE_STANDARD_SQL"
    POSTGRESQL = "POSTGRESQL"


@dataclass_json
@dataclass
class CreateDatabaseRequest:
    create_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createStatement' }})
    database_dialect: Optional[CreateDatabaseRequestDatabaseDialectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseDialect' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    extra_statements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraStatements' }})
    
