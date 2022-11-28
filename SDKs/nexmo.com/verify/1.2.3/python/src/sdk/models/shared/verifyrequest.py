from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class VerifyRequestLgEnum(str, Enum):
    AR_XA = "ar-xa"
    CS_CZ = "cs-cz"
    CY_CY = "cy-cy"
    CY_GB = "cy-gb"
    DA_DK = "da-dk"
    DE_DE = "de-de"
    EL_GR = "el-gr"
    EN_AU = "en-au"
    EN_GB = "en-gb"
    EN_IN = "en-in"
    EN_US = "en-us"
    ES_ES = "es-es"
    ES_MX = "es-mx"
    ES_US = "es-us"
    FI_FI = "fi-fi"
    FIL_PH = "fil-ph"
    FR_CA = "fr-ca"
    FR_FR = "fr-fr"
    HI_IN = "hi-in"
    HU_HU = "hu-hu"
    ID_ID = "id-id"
    IS_IS = "is-is"
    IT_IT = "it-it"
    JA_JP = "ja-jp"
    KO_KR = "ko-kr"
    NB_NO = "nb-no"
    NL_NL = "nl-nl"
    PL_PL = "pl-pl"
    PT_BR = "pt-br"
    PT_PT = "pt-pt"
    RO_RO = "ro-ro"
    RU_RU = "ru-ru"
    SV_SE = "sv-se"
    TH_TH = "th-th"
    TR_TR = "tr-tr"
    VI_VN = "vi-vn"
    YUE_CN = "yue-cn"
    ZH_CN = "zh-cn"
    ZH_TW = "zh-tw"


@dataclass
class VerifyRequest:
    api_key: str = field(metadata={'form': { 'field_name': 'api_key' }})
    api_secret: str = field(metadata={'form': { 'field_name': 'api_secret' }})
    brand: str = field(metadata={'form': { 'field_name': 'brand' }})
    number: str = field(metadata={'form': { 'field_name': 'number' }})
    code_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'code_length' }})
    country: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'country' }})
    lg: Optional[VerifyRequestLgEnum] = field(default=None, metadata={'form': { 'field_name': 'lg' }})
    next_event_wait: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'next_event_wait' }})
    pin_expiry: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'pin_expiry' }})
    sender_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'sender_id' }})
    workflow_id: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'workflow_id' }})
    
