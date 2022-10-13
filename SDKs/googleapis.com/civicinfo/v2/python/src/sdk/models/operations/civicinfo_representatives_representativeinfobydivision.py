from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams:
    ocd_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ocdId', 'style': 'simple', 'explode': False }})
    
class CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum(str, Enum):
    INTERNATIONAL = "international"
    COUNTRY = "country"
    ADMINISTRATIVE_AREA1 = "administrativeArea1"
    REGIONAL = "regional"
    ADMINISTRATIVE_AREA2 = "administrativeArea2"
    LOCALITY = "locality"
    SUB_LOCALITY1 = "subLocality1"
    SUB_LOCALITY2 = "subLocality2"
    SPECIAL = "special"

class CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum(str, Enum):
    HEAD_OF_STATE = "headOfState"
    HEAD_OF_GOVERNMENT = "headOfGovernment"
    DEPUTY_HEAD_OF_GOVERNMENT = "deputyHeadOfGovernment"
    GOVERNMENT_OFFICER = "governmentOfficer"
    EXECUTIVE_COUNCIL = "executiveCouncil"
    LEGISLATOR_UPPER_BODY = "legislatorUpperBody"
    LEGISLATOR_LOWER_BODY = "legislatorLowerBody"
    HIGHEST_COURT_JUDGE = "highestCourtJudge"
    JUDGE = "judge"
    SCHOOL_BOARD = "schoolBoard"
    SPECIAL_PURPOSE_OFFICER = "specialPurposeOfficer"
    OTHER_ROLE = "otherRole"


@dataclass
class CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    levels: Optional[List[CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'levels', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    recursive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    roles: Optional[List[CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'roles', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CivicinfoRepresentativesRepresentativeInfoByDivisionRequest:
    path_params: CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams = field(default=None)
    query_params: CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams = field(default=None)
    

@dataclass
class CivicinfoRepresentativesRepresentativeInfoByDivisionResponse:
    content_type: str = field(default=None)
    representative_info_data: Optional[shared.RepresentativeInfoData] = field(default=None)
    status_code: int = field(default=None)
    
