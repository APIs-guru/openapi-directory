from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsaccesskey


@dataclass_json
@dataclass
class AwsS3Data:
    aws_access_key: Optional[awsaccesskey.AwsAccessKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccessKey' }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
