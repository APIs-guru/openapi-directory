from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class JobDegreeTypesEnum(str, Enum):
    DEGREE_TYPE_UNSPECIFIED = "DEGREE_TYPE_UNSPECIFIED"
    PRIMARY_EDUCATION = "PRIMARY_EDUCATION"
    LOWER_SECONDARY_EDUCATION = "LOWER_SECONDARY_EDUCATION"
    UPPER_SECONDARY_EDUCATION = "UPPER_SECONDARY_EDUCATION"
    ADULT_REMEDIAL_EDUCATION = "ADULT_REMEDIAL_EDUCATION"
    ASSOCIATES_OR_EQUIVALENT = "ASSOCIATES_OR_EQUIVALENT"
    BACHELORS_OR_EQUIVALENT = "BACHELORS_OR_EQUIVALENT"
    MASTERS_OR_EQUIVALENT = "MASTERS_OR_EQUIVALENT"
    DOCTORAL_OR_EQUIVALENT = "DOCTORAL_OR_EQUIVALENT"

class JobEmploymentTypesEnum(str, Enum):
    EMPLOYMENT_TYPE_UNSPECIFIED = "EMPLOYMENT_TYPE_UNSPECIFIED"
    FULL_TIME = "FULL_TIME"
    PART_TIME = "PART_TIME"
    CONTRACTOR = "CONTRACTOR"
    CONTRACT_TO_HIRE = "CONTRACT_TO_HIRE"
    TEMPORARY = "TEMPORARY"
    INTERN = "INTERN"
    VOLUNTEER = "VOLUNTEER"
    PER_DIEM = "PER_DIEM"
    FLY_IN_FLY_OUT = "FLY_IN_FLY_OUT"
    OTHER_EMPLOYMENT_TYPE = "OTHER_EMPLOYMENT_TYPE"

class JobJobBenefitsEnum(str, Enum):
    JOB_BENEFIT_UNSPECIFIED = "JOB_BENEFIT_UNSPECIFIED"
    CHILD_CARE = "CHILD_CARE"
    DENTAL = "DENTAL"
    DOMESTIC_PARTNER = "DOMESTIC_PARTNER"
    FLEXIBLE_HOURS = "FLEXIBLE_HOURS"
    MEDICAL = "MEDICAL"
    LIFE_INSURANCE = "LIFE_INSURANCE"
    PARENTAL_LEAVE = "PARENTAL_LEAVE"
    RETIREMENT_PLAN = "RETIREMENT_PLAN"
    SICK_DAYS = "SICK_DAYS"
    VACATION = "VACATION"
    VISION = "VISION"

class JobJobLevelEnum(str, Enum):
    JOB_LEVEL_UNSPECIFIED = "JOB_LEVEL_UNSPECIFIED"
    ENTRY_LEVEL = "ENTRY_LEVEL"
    EXPERIENCED = "EXPERIENCED"
    MANAGER = "MANAGER"
    DIRECTOR = "DIRECTOR"
    EXECUTIVE = "EXECUTIVE"

class JobPostingRegionEnum(str, Enum):
    POSTING_REGION_UNSPECIFIED = "POSTING_REGION_UNSPECIFIED"
    ADMINISTRATIVE_AREA = "ADMINISTRATIVE_AREA"
    NATION = "NATION"
    TELECOMMUTE = "TELECOMMUTE"

class JobVisibilityEnum(str, Enum):
    VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED"
    ACCOUNT_ONLY = "ACCOUNT_ONLY"
    SHARED_WITH_GOOGLE = "SHARED_WITH_GOOGLE"
    SHARED_WITH_PUBLIC = "SHARED_WITH_PUBLIC"


@dataclass_json
@dataclass
class Job:
    r"""Job
    A Job resource represents a job posting (also referred to as a \"job listing\" or \"job requisition\"). A job belongs to a Company, which is the hiring entity responsible for the job.
    """
    
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    application_info: Optional[ApplicationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationInfo') }})
    company_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyDisplayName') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    compensation_info: Optional[CompensationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensationInfo') }})
    custom_attributes: Optional[dict[str, CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributes') }})
    degree_types: Optional[List[JobDegreeTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('degreeTypes') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    derived_info: Optional[JobDerivedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedInfo') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    employment_types: Optional[List[JobEmploymentTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employmentTypes') }})
    incentives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incentives') }})
    job_benefits: Optional[List[JobJobBenefitsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobBenefits') }})
    job_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobEndTime') }})
    job_level: Optional[JobJobLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobLevel') }})
    job_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobStartTime') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    posting_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postingCreateTime') }})
    posting_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postingExpireTime') }})
    posting_publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postingPublishTime') }})
    posting_region: Optional[JobPostingRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postingRegion') }})
    posting_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postingUpdateTime') }})
    processing_options: Optional[ProcessingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingOptions') }})
    promotion_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionValue') }})
    qualifications: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifications') }})
    requisition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requisitionId') }})
    responsibilities: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsibilities') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    visibility: Optional[JobVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
