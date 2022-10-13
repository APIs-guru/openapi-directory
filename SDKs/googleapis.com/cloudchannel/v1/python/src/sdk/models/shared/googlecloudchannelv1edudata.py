from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudChannelV1EduDataInstituteSizeEnum(str, Enum):
    INSTITUTE_SIZE_UNSPECIFIED = "INSTITUTE_SIZE_UNSPECIFIED"
    SIZE_1_100 = "SIZE_1_100"
    SIZE_101_500 = "SIZE_101_500"
    SIZE_501_1000 = "SIZE_501_1000"
    SIZE_1001_2000 = "SIZE_1001_2000"
    SIZE_2001_5000 = "SIZE_2001_5000"
    SIZE_5001_10000 = "SIZE_5001_10000"
    SIZE_10001_OR_MORE = "SIZE_10001_OR_MORE"

class GoogleCloudChannelV1EduDataInstituteTypeEnum(str, Enum):
    INSTITUTE_TYPE_UNSPECIFIED = "INSTITUTE_TYPE_UNSPECIFIED"
    K12 = "K12"
    UNIVERSITY = "UNIVERSITY"


@dataclass_json
@dataclass
class GoogleCloudChannelV1EduData:
    institute_size: Optional[GoogleCloudChannelV1EduDataInstituteSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instituteSize' }})
    institute_type: Optional[GoogleCloudChannelV1EduDataInstituteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instituteType' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
