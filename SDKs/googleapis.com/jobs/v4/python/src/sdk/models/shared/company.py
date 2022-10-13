from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import companyderivedinfo

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
    career_site_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careerSiteUri' }})
    derived_info: Optional[companyderivedinfo.CompanyDerivedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derivedInfo' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    eeo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eeoText' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    headquarters_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headquartersAddress' }})
    hiring_agency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiringAgency' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    keyword_searchable_job_custom_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordSearchableJobCustomAttributes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size: Optional[CompanySizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended' }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUri' }})
    
