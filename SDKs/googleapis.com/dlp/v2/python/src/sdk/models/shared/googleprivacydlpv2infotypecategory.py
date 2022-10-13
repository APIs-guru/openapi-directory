from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum(str, Enum):
    INDUSTRY_UNSPECIFIED = "INDUSTRY_UNSPECIFIED"
    FINANCE = "FINANCE"
    HEALTH = "HEALTH"
    TELECOMMUNICATIONS = "TELECOMMUNICATIONS"

class GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum(str, Enum):
    LOCATION_UNSPECIFIED = "LOCATION_UNSPECIFIED"
    GLOBAL = "GLOBAL"
    ARGENTINA = "ARGENTINA"
    AUSTRALIA = "AUSTRALIA"
    BELGIUM = "BELGIUM"
    BRAZIL = "BRAZIL"
    CANADA = "CANADA"
    CHILE = "CHILE"
    CHINA = "CHINA"
    COLOMBIA = "COLOMBIA"
    DENMARK = "DENMARK"
    FRANCE = "FRANCE"
    FINLAND = "FINLAND"
    GERMANY = "GERMANY"
    HONG_KONG = "HONG_KONG"
    INDIA = "INDIA"
    INDONESIA = "INDONESIA"
    IRELAND = "IRELAND"
    ISRAEL = "ISRAEL"
    ITALY = "ITALY"
    JAPAN = "JAPAN"
    KOREA = "KOREA"
    MEXICO = "MEXICO"
    THE_NETHERLANDS = "THE_NETHERLANDS"
    NORWAY = "NORWAY"
    PARAGUAY = "PARAGUAY"
    PERU = "PERU"
    POLAND = "POLAND"
    PORTUGAL = "PORTUGAL"
    SINGAPORE = "SINGAPORE"
    SOUTH_AFRICA = "SOUTH_AFRICA"
    SPAIN = "SPAIN"
    SWEDEN = "SWEDEN"
    TAIWAN = "TAIWAN"
    THAILAND = "THAILAND"
    TURKEY = "TURKEY"
    UNITED_KINGDOM = "UNITED_KINGDOM"
    UNITED_STATES = "UNITED_STATES"
    URUGUAY = "URUGUAY"
    VENEZUELA = "VENEZUELA"
    INTERNAL = "INTERNAL"

class GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PII = "PII"
    SPII = "SPII"
    DEMOGRAPHIC = "DEMOGRAPHIC"
    CREDENTIAL = "CREDENTIAL"
    GOVERNMENT_ID = "GOVERNMENT_ID"
    DOCUMENT = "DOCUMENT"
    CONTEXTUAL_INFORMATION = "CONTEXTUAL_INFORMATION"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeCategory:
    industry_category: Optional[GooglePrivacyDlpV2InfoTypeCategoryIndustryCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'industryCategory' }})
    location_category: Optional[GooglePrivacyDlpV2InfoTypeCategoryLocationCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationCategory' }})
    type_category: Optional[GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeCategory' }})
    
