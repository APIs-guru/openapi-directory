from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PropertyValueSourceEnum(str, Enum):
    IMPORT = "IMPORT"
    API = "API"
    FORM = "FORM"
    ANALYTICS = "ANALYTICS"
    MIGRATION = "MIGRATION"
    SALESFORCE = "SALESFORCE"
    INTEGRATION = "INTEGRATION"
    CONTACTS_WEB = "CONTACTS_WEB"
    WAL_INCREMENTAL = "WAL_INCREMENTAL"
    TASK = "TASK"
    EMAIL = "EMAIL"
    WORKFLOWS = "WORKFLOWS"
    CALCULATED = "CALCULATED"
    SOCIAL = "SOCIAL"
    BATCH_UPDATE = "BATCH_UPDATE"
    SIGNALS = "SIGNALS"
    BIDEN = "BIDEN"
    DEFAULT = "DEFAULT"
    COMPANIES = "COMPANIES"
    DEALS = "DEALS"
    ASSISTS = "ASSISTS"
    PRESENTATIONS = "PRESENTATIONS"
    TALLY = "TALLY"
    SIDEKICK = "SIDEKICK"
    CRM_UI = "CRM_UI"
    MERGE_CONTACTS = "MERGE_CONTACTS"
    PORTAL_USER_ASSOCIATOR = "PORTAL_USER_ASSOCIATOR"
    INTEGRATIONS_PLATFORM = "INTEGRATIONS_PLATFORM"
    BCC_TO_CRM = "BCC_TO_CRM"
    FORWARD_TO_CRM = "FORWARD_TO_CRM"
    ENGAGEMENTS = "ENGAGEMENTS"
    SALES = "SALES"
    HEISENBERG = "HEISENBERG"
    LEADIN = "LEADIN"
    GMAIL_INTEGRATION = "GMAIL_INTEGRATION"
    ACADEMY = "ACADEMY"
    SALES_MESSAGES = "SALES_MESSAGES"
    AVATARS_SERVICE = "AVATARS_SERVICE"
    MERGE_COMPANIES = "MERGE_COMPANIES"
    SEQUENCES = "SEQUENCES"
    COMPANY_FAMILIES = "COMPANY_FAMILIES"
    MOBILE_IOS = "MOBILE_IOS"
    MOBILE_ANDROID = "MOBILE_ANDROID"
    CONTACTS = "CONTACTS"
    ASSOCIATIONS = "ASSOCIATIONS"
    EXTENSION = "EXTENSION"
    SUCCESS = "SUCCESS"
    BOT = "BOT"
    INTEGRATIONS_SYNC = "INTEGRATIONS_SYNC"
    AUTOMATION_PLATFORM = "AUTOMATION_PLATFORM"
    CONVERSATIONS = "CONVERSATIONS"
    EMAIL_INTEGRATION = "EMAIL_INTEGRATION"
    CONTENT_MEMBERSHIP = "CONTENT_MEMBERSHIP"
    QUOTES = "QUOTES"
    BET_ASSIGNMENT = "BET_ASSIGNMENT"
    QUOTAS = "QUOTAS"
    BET_CRM_CONNECTOR = "BET_CRM_CONNECTOR"
    MEETINGS = "MEETINGS"
    MERGE_OBJECTS = "MERGE_OBJECTS"
    RECYCLING_BIN = "RECYCLING_BIN"
    ADS = "ADS"
    AI_GROUP = "AI_GROUP"
    COMMUNICATOR = "COMMUNICATOR"
    SETTINGS = "SETTINGS"
    PROPERTY_SETTINGS = "PROPERTY_SETTINGS"
    PIPELINE_SETTINGS = "PIPELINE_SETTINGS"
    COMPANY_INSIGHTS = "COMPANY_INSIGHTS"
    BEHAVIORAL_EVENTS = "BEHAVIORAL_EVENTS"
    PAYMENTS = "PAYMENTS"
    GOALS = "GOALS"
    PORTAL_OBJECT_SYNC = "PORTAL_OBJECT_SYNC"
    APPROVALS = "APPROVALS"
    FILE_MANAGER = "FILE_MANAGER"
    MARKETPLACE = "MARKETPLACE"
    INTERNAL_PROCESSING = "INTERNAL_PROCESSING"
    FORECASTING = "FORECASTING"
    SLACK_INTEGRATION = "SLACK_INTEGRATION"
    CRM_UI_BULK_ACTION = "CRM_UI_BULK_ACTION"
    WORKFLOW_CONTACT_DELETE_ACTION = "WORKFLOW_CONTACT_DELETE_ACTION"


@dataclass_json
@dataclass
class PropertyValue:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    selected_by_user: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedByUser') }})
    selected_by_user_timestamp: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedByUserTimestamp') }})
    source: PropertyValueSourceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    source_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLabel') }})
    source_metadata: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceMetadata') }})
    source_vid: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVid') }})
    timestamp: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    updated_by_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedByUserId') }})
    
