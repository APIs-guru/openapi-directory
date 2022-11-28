from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectStorageSsl:
    r"""ObjectStorageSsl
    Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
    
    """
    
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    private_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    
