from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprototaskmetadataadmin

class EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum(str, Enum):
    UNSPECIFIED_CATEGORY = "UNSPECIFIED_CATEGORY"
    CUSTOM = "CUSTOM"
    FLOW_CONTROL = "FLOW_CONTROL"
    DATA_MANIPULATION = "DATA_MANIPULATION"
    SCRIPTING = "SCRIPTING"
    CONNECTOR = "CONNECTOR"
    HIDDEN = "HIDDEN"
    CLOUD_SYSTEMS = "CLOUD_SYSTEMS"
    CUSTOM_TASK_TEMPLATE = "CUSTOM_TASK_TEMPLATE"

class EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum(str, Enum):
    UNSPECIFIED_JSON_VALIDATION_OPTION = "UNSPECIFIED_JSON_VALIDATION_OPTION"
    SKIP = "SKIP"
    PRE_EXECUTION = "PRE_EXECUTION"
    POST_EXECUTION = "POST_EXECUTION"
    PRE_POST_EXECUTION = "PRE_POST_EXECUTION"

class EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum(str, Enum):
    UNSPECIFIED_EXTERNAL_CATEGORY = "UNSPECIFIED_EXTERNAL_CATEGORY"
    CORE = "CORE"
    CONNECTORS = "CONNECTORS"

class EnterpriseCrmEventbusProtoTaskMetadataStatusEnum(str, Enum):
    UNSPECIFIED_STATUS = "UNSPECIFIED_STATUS"
    DEFAULT_INACTIVE = "DEFAULT_INACTIVE"
    ACTIVE = "ACTIVE"

class EnterpriseCrmEventbusProtoTaskMetadataSystemEnum(str, Enum):
    UNSPECIFIED_SYSTEM = "UNSPECIFIED_SYSTEM"
    GENERIC = "GENERIC"
    BUGANIZER = "BUGANIZER"
    SALESFORCE = "SALESFORCE"
    CLOUD_SQL = "CLOUD_SQL"
    PLX = "PLX"
    SHEETS = "SHEETS"
    GOOGLE_GROUPS = "GOOGLE_GROUPS"
    EMAIL = "EMAIL"
    SPANNER = "SPANNER"
    DATA_BRIDGE = "DATA_BRIDGE"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTaskMetadata:
    active_task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeTaskName' }})
    admins: Optional[List[enterprisecrmeventbusprototaskmetadataadmin.EnterpriseCrmEventbusProtoTaskMetadataAdmin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admins' }})
    category: Optional[EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    code_search_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeSearchLink' }})
    default_json_validation_option: Optional[EnterpriseCrmEventbusProtoTaskMetadataDefaultJSONValidationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultJsonValidationOption' }})
    default_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSpec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    descriptive_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptiveName' }})
    doc_markdown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'docMarkdown' }})
    external_category: Optional[EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalCategory' }})
    external_category_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalCategorySequence' }})
    external_doc_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDocHtml' }})
    external_doc_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDocLink' }})
    external_doc_markdown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDocMarkdown' }})
    g3_doc_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'g3DocLink' }})
    icon_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconLink' }})
    is_deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeprecated' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    standalone_external_doc_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standaloneExternalDocHtml' }})
    status: Optional[EnterpriseCrmEventbusProtoTaskMetadataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    system: Optional[EnterpriseCrmEventbusProtoTaskMetadataSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
