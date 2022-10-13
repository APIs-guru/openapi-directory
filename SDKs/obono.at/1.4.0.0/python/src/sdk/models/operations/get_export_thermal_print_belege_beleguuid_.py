from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetExportThermalPrintBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    
class GetExportThermalPrintBelegeBelegUUIDDialectEnum(str, Enum):
    ESCPOS = "escpos"
    ESCPOSLITE = "escposlite"
    STAR = "star"
    TEXT = "text"

class GetExportThermalPrintBelegeBelegUUIDEncodingEnum(str, Enum):
    RAW = "raw"
    BASE64 = "base64"


@dataclass
class GetExportThermalPrintBelegeBelegUUIDQueryParams:
    dialect: Optional[GetExportThermalPrintBelegeBelegUUIDDialectEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dialect', 'style': 'form', 'explode': True }})
    encoding: Optional[GetExportThermalPrintBelegeBelegUUIDEncodingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'encoding', 'style': 'form', 'explode': True }})
    qr: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'qr', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportThermalPrintBelegeBelegUUIDRequest:
    path_params: GetExportThermalPrintBelegeBelegUUIDPathParams = field(default=None)
    query_params: GetExportThermalPrintBelegeBelegUUIDQueryParams = field(default=None)
    

@dataclass
class GetExportThermalPrintBelegeBelegUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
