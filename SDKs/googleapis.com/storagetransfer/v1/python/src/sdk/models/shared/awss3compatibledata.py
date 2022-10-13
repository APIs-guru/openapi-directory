from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3compatiblemetadata


@dataclass_json
@dataclass
class AwsS3CompatibleData:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    s3_metadata: Optional[s3compatiblemetadata.S3CompatibleMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Metadata' }})
    
