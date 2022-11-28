from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum(str, Enum):
    APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED = "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum(str, Enum):
    CONCURRENCY_MODE_UNSPECIFIED = "CONCURRENCY_MODE_UNSPECIFIED"
    OPTIMISTIC = "OPTIMISTIC"
    PESSIMISTIC = "PESSIMISTIC"
    OPTIMISTIC_WITH_ENTITY_GROUPS = "OPTIMISTIC_WITH_ENTITY_GROUPS"

class GoogleFirestoreAdminV1DatabaseTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    FIRESTORE_NATIVE = "FIRESTORE_NATIVE"
    DATASTORE_MODE = "DATASTORE_MODE"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1Database:
    r"""GoogleFirestoreAdminV1Database
    A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
    """
    
    app_engine_integration_mode: Optional[GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineIntegrationMode') }})
    concurrency_mode: Optional[GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrencyMode') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPrefix') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleFirestoreAdminV1DatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoogleFirestoreAdminV1DatabaseInput:
    r"""GoogleFirestoreAdminV1DatabaseInput
    A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
    """
    
    app_engine_integration_mode: Optional[GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineIntegrationMode') }})
    concurrency_mode: Optional[GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrencyMode') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleFirestoreAdminV1DatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
