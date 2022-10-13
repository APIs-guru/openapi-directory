from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GooglePrivacyDlpV2ByteContentItemTypeEnum(str, Enum):
    BYTES_TYPE_UNSPECIFIED = "BYTES_TYPE_UNSPECIFIED"
    IMAGE = "IMAGE"
    IMAGE_JPEG = "IMAGE_JPEG"
    IMAGE_BMP = "IMAGE_BMP"
    IMAGE_PNG = "IMAGE_PNG"
    IMAGE_SVG = "IMAGE_SVG"
    TEXT_UTF8 = "TEXT_UTF8"
    WORD_DOCUMENT = "WORD_DOCUMENT"
    PDF = "PDF"
    POWERPOINT_DOCUMENT = "POWERPOINT_DOCUMENT"
    EXCEL_DOCUMENT = "EXCEL_DOCUMENT"
    AVRO = "AVRO"
    CSV = "CSV"
    TSV = "TSV"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ByteContentItem:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    type: Optional[GooglePrivacyDlpV2ByteContentItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
