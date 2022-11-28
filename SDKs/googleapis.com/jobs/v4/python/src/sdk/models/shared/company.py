from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompanySizeEnum(str, Enum):
    COMPANY_SIZE_UNSPECIFIED = "COMPANY_SIZE_UNSPECIFIED"
    MINI = "MINI"
    SMALL = "SMALL"
    SMEDIUM = "SMEDIUM"
    MEDIUM = "MEDIUM"
    BIG = "BIG"
    BIGGER = "BIGGER"
    GIANT = "GIANT"


@dataclass_json
@dataclass
class Company:
    r"""Company
    A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
    """
    
    career_site_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('careerSiteUri') }})
    derived_info: Optional[CompanyDerivedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedInfo') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    eeo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eeoText') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    headquarters_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headquartersAddress') }})
    hiring_agency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiringAgency') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    keyword_searchable_job_custom_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordSearchableJobCustomAttributes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[CompanySizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended') }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUri') }})
    

@dataclass_json
@dataclass
class CompanyInput:
    r"""CompanyInput
    A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
    """
    
    career_site_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('careerSiteUri') }})
    derived_info: Optional[CompanyDerivedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedInfo') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    eeo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eeoText') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    headquarters_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headquartersAddress') }})
    hiring_agency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiringAgency') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    keyword_searchable_job_custom_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordSearchableJobCustomAttributes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[CompanySizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUri') }})
    
