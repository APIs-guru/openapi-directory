from dataclasses import dataclass, field



@dataclass
class LicensesReadPathParams:
    license_id: str = field(default=None, metadata={'path_param': { 'field_name': 'license_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicensesReadRequest:
    path_params: LicensesReadPathParams = field(default=None)
    

@dataclass
class LicensesReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
