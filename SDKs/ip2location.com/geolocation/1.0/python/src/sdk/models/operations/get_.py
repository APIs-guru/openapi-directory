from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum

class GetAddonEnum(str, Enum):
    CONTINENT = "continent"
    COUNTRY = "country"
    REGION = "region"
    CITY = "city"
    GEOTARGETING = "geotargeting"
    COUNTRY_GROUPINGS = "country_groupings"
    TIME_ZONE_INFO = "time_zone_info"

class GetFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"

class GetLangEnum(str, Enum):
    AR = "ar"
    CS = "cs"
    DA = "da"
    DE = "de"
    EN = "en"
    ES = "es"
    ET = "et"
    FI = "fi"
    FR = "fr"
    GA = "ga"
    IT = "it"
    JA = "ja"
    KO = "ko"
    MS = "ms"
    NL = "nl"
    PT = "pt"
    RU = "ru"
    SV = "sv"
    TR = "tr"
    VI = "vi"
    ZH_CN = "zh-cn"
    ZH_TW = "zh-tw"

class GetPackageEnum(str, Enum):
    WS1 = "WS1"
    WS2 = "WS2"
    WS3 = "WS3"
    WS4 = "WS4"
    WS5 = "WS5"
    WS6 = "WS6"
    WS7 = "WS7"
    WS8 = "WS8"
    WS9 = "WS9"
    WS10 = "WS10"
    WS11 = "WS11"
    WS12 = "WS12"
    WS13 = "WS13"
    WS14 = "WS14"
    WS15 = "WS15"
    WS16 = "WS16"
    WS17 = "WS17"
    WS18 = "WS18"
    WS19 = "WS19"
    WS20 = "WS20"
    WS21 = "WS21"
    WS22 = "WS22"
    WS23 = "WS23"
    WS24 = "WS24"
    WS25 = "WS25"


@dataclass
class GetQueryParams:
    ip: str = field(metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    key: str = field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    addon: Optional[List[GetAddonEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'addon', 'style': 'form', 'explode': False }})
    format: Optional[GetFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    lang: Optional[GetLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    package: Optional[GetPackageEnum] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequest:
    query_params: GetQueryParams = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    get_200_application_json_string: Optional[str] = field(default=None)
    
