from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bucketaccesscontrol
from . import objectaccesscontrol


@dataclass_json
@dataclass
class BucketCors:
    max_age_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAgeSeconds' }})
    method: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    origin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    response_header: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseHeader' }})
    

@dataclass_json
@dataclass
class BucketLifecycleRuleAction:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class BucketLifecycleRuleCondition:
    age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age' }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_live: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLive' }})
    num_newer_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numNewerVersions' }})
    

@dataclass_json
@dataclass
class BucketLifecycleRule:
    action: Optional[BucketLifecycleRuleAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    condition: Optional[BucketLifecycleRuleCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    

@dataclass_json
@dataclass
class BucketLifecycle:
    rule: Optional[List[BucketLifecycleRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    

@dataclass_json
@dataclass
class BucketLogging:
    log_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logBucket' }})
    log_object_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logObjectPrefix' }})
    

@dataclass_json
@dataclass
class BucketOwner:
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    

@dataclass_json
@dataclass
class BucketVersioning:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class BucketWebsite:
    main_page_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPageSuffix' }})
    not_found_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notFoundPage' }})
    

@dataclass_json
@dataclass
class Bucket:
    acl: Optional[List[bucketaccesscontrol.BucketAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    cors: Optional[List[BucketCors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    default_object_acl: Optional[List[objectaccesscontrol.ObjectAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultObjectAcl' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    lifecycle: Optional[BucketLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    logging: Optional[BucketLogging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    metageneration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metageneration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[BucketOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageClass' }})
    time_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    versioning: Optional[BucketVersioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioning' }})
    website: Optional[BucketWebsite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
