from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidationCa:
    r"""ValidationCa
    Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.
    """
    
    certificate_provider_instance: Optional[CertificateProviderInstance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateProviderInstance') }})
    grpc_endpoint: Optional[GoogleCloudNetworksecurityV1GrpcEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcEndpoint') }})
    
