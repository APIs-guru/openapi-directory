from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceResolver:
    r"""ServiceResolver
    A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
    """
    
    endpoint_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointFilter') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    server_certificates: Optional[List[Certificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificates') }})
    service_directory_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectoryService') }})
    

@dataclass_json
@dataclass
class ServiceResolverInput:
    r"""ServiceResolverInput
    A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
    """
    
    endpoint_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointFilter') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    server_certificates: Optional[List[CertificateInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificates') }})
    service_directory_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectoryService') }})
    
