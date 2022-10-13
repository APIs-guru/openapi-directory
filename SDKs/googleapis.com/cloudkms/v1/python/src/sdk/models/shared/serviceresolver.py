from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificate


@dataclass_json
@dataclass
class ServiceResolver:
    endpoint_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointFilter' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    server_certificates: Optional[List[certificate.Certificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCertificates' }})
    service_directory_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDirectoryService' }})
    
