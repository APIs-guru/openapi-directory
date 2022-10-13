from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsRaceEthnicityZip5PathParams:
    first_name: str = field(default=None, metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(default=None, metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    zip5_code: str = field(default=None, metadata={'path_param': { 'field_name': 'zip5Code', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsRaceEthnicityZip5Security:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsRaceEthnicityZip5Request:
    path_params: UsRaceEthnicityZip5PathParams = field(default=None)
    security: UsRaceEthnicityZip5Security = field(default=None)
    

@dataclass
class UsRaceEthnicityZip5Response:
    content_type: str = field(default=None)
    first_last_name_us_race_ethnicity_out: Optional[shared.FirstLastNameUsRaceEthnicityOut] = field(default=None)
    status_code: int = field(default=None)
    
