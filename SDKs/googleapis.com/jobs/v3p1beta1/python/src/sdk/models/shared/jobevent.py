from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class JobEventTypeEnum(str, Enum):
    JOB_EVENT_TYPE_UNSPECIFIED = "JOB_EVENT_TYPE_UNSPECIFIED"
    IMPRESSION = "IMPRESSION"
    VIEW = "VIEW"
    VIEW_REDIRECT = "VIEW_REDIRECT"
    APPLICATION_START = "APPLICATION_START"
    APPLICATION_FINISH = "APPLICATION_FINISH"
    APPLICATION_QUICK_SUBMISSION = "APPLICATION_QUICK_SUBMISSION"
    APPLICATION_REDIRECT = "APPLICATION_REDIRECT"
    APPLICATION_START_FROM_SEARCH = "APPLICATION_START_FROM_SEARCH"
    APPLICATION_REDIRECT_FROM_SEARCH = "APPLICATION_REDIRECT_FROM_SEARCH"
    APPLICATION_COMPANY_SUBMIT = "APPLICATION_COMPANY_SUBMIT"
    BOOKMARK = "BOOKMARK"
    NOTIFICATION = "NOTIFICATION"
    HIRED = "HIRED"
    SENT_CV = "SENT_CV"
    INTERVIEW_GRANTED = "INTERVIEW_GRANTED"
    NOT_INTERESTED = "NOT_INTERESTED"


@dataclass_json
@dataclass
class JobEvent:
    r"""JobEvent
    An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
    """
    
    jobs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    type: Optional[JobEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
