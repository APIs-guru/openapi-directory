from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetExportThermalPrintBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetExportThermalPrintBelegeBelegUUIDPathParams = field()
    query_params: GetExportThermalPrintBelegeBelegUUIDQueryParams = field()
    

@dataclass
class GetExportThermalPrintBelegeBelegUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
