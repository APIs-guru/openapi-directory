from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsAccessKey:
    r"""AwsAccessKey
    AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
    """
    
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    secret_access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    
