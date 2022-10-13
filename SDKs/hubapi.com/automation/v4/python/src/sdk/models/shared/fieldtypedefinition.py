from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import option

class FieldTypeDefinitionFieldTypeEnum(str, Enum):
    BOOLEANCHECKBOX = "booleancheckbox"
    CHECKBOX = "checkbox"
    DATE = "date"
    FILE = "file"
    NUMBER = "number"
    PHONENUMBER = "phonenumber"
    RADIO = "radio"
    SELECT = "select"
    TEXT = "text"
    TEXTAREA = "textarea"
    CALCULATION_EQUATION = "calculation_equation"
    CALCULATION_ROLLUP = "calculation_rollup"
    CALCULATION_SCORE = "calculation_score"
    CALCULATION_READ_TIME = "calculation_read_time"
    UNKNOWN = "unknown"

class FieldTypeDefinitionReferencedObjectTypeEnum(str, Enum):
    CONTACT = "CONTACT"
    COMPANY = "COMPANY"
    DEAL = "DEAL"
    ENGAGEMENT = "ENGAGEMENT"
    TICKET = "TICKET"
    OWNER = "OWNER"
    PRODUCT = "PRODUCT"
    LINE_ITEM = "LINE_ITEM"
    BET_DELIVERABLE_SERVICE = "BET_DELIVERABLE_SERVICE"
    CONTENT = "CONTENT"
    CONVERSATION = "CONVERSATION"
    BET_ALERT = "BET_ALERT"
    PORTAL = "PORTAL"
    QUOTE = "QUOTE"
    FORM_SUBMISSION_INBOUNDDB = "FORM_SUBMISSION_INBOUNDDB"
    QUOTA = "QUOTA"
    UNSUBSCRIBE = "UNSUBSCRIBE"
    COMMUNICATION = "COMMUNICATION"
    FEEDBACK_SUBMISSION = "FEEDBACK_SUBMISSION"
    ATTRIBUTION = "ATTRIBUTION"
    SALESFORCE_SYNC_ERROR = "SALESFORCE_SYNC_ERROR"
    RESTORABLE_CRM_OBJECT = "RESTORABLE_CRM_OBJECT"
    HUB = "HUB"
    LANDING_PAGE = "LANDING_PAGE"
    PRODUCT_OR_FOLDER = "PRODUCT_OR_FOLDER"
    TASK = "TASK"
    FORM = "FORM"
    MARKETING_EMAIL = "MARKETING_EMAIL"
    AD_ACCOUNT = "AD_ACCOUNT"
    AD_CAMPAIGN = "AD_CAMPAIGN"
    AD_GROUP = "AD_GROUP"
    AD = "AD"
    KEYWORD = "KEYWORD"
    CAMPAIGN = "CAMPAIGN"
    SOCIAL_CHANNEL = "SOCIAL_CHANNEL"
    SOCIAL_POST = "SOCIAL_POST"
    SITE_PAGE = "SITE_PAGE"
    BLOG_POST = "BLOG_POST"
    IMPORT = "IMPORT"
    EXPORT = "EXPORT"
    CTA = "CTA"
    TASK_TEMPLATE = "TASK_TEMPLATE"
    AUTOMATION_PLATFORM_FLOW = "AUTOMATION_PLATFORM_FLOW"
    OBJECT_LIST = "OBJECT_LIST"
    NOTE = "NOTE"
    MEETING_EVENT = "MEETING_EVENT"
    CALL = "CALL"
    EMAIL = "EMAIL"
    PUBLISHING_TASK = "PUBLISHING_TASK"
    CONVERSATION_SESSION = "CONVERSATION_SESSION"
    CONTACT_CREATE_ATTRIBUTION = "CONTACT_CREATE_ATTRIBUTION"
    INVOICE = "INVOICE"
    MARKETING_EVENT = "MARKETING_EVENT"
    CONVERSATION_INBOX = "CONVERSATION_INBOX"
    CHATFLOW = "CHATFLOW"
    MEDIA_BRIDGE = "MEDIA_BRIDGE"
    SEQUENCE = "SEQUENCE"
    SEQUENCE_STEP = "SEQUENCE_STEP"
    FORECAST = "FORECAST"
    SNIPPET = "SNIPPET"
    TEMPLATE = "TEMPLATE"
    UNKNOWN = "UNKNOWN"

class FieldTypeDefinitionTypeEnum(str, Enum):
    STRING = "string"
    NUMBER = "number"
    BOOL = "bool"
    DATETIME = "datetime"
    ENUMERATION = "enumeration"
    DATE = "date"
    PHONE_NUMBER = "phone_number"
    CURRENCY_NUMBER = "currency_number"
    JSON = "json"
    OBJECT_COORDINATES = "object_coordinates"


@dataclass_json
@dataclass
class FieldTypeDefinition:
    field_type: Optional[FieldTypeDefinitionFieldTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: List[option.Option] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    options_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optionsUrl' }})
    referenced_object_type: Optional[FieldTypeDefinitionReferencedObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referencedObjectType' }})
    type: FieldTypeDefinitionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
