from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3Data:
    r"""AwsS3Data
    An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.
    """
    
    aws_access_key: Optional[AwsAccessKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccessKey') }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
