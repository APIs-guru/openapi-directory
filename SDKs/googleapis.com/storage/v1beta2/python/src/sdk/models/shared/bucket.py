from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BucketCors:
    max_age_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAgeSeconds') }})
    method: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    origin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    response_header: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseHeader') }})
    

@dataclass_json
@dataclass
class BucketLifecycleRuleAction:
    r"""BucketLifecycleRuleAction
    The action to take.
    """
    
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class BucketLifecycleRuleCondition:
    r"""BucketLifecycleRuleCondition
    The condition(s) under which the action will be taken.
    """
    
    age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age') }})
    created_before: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBefore'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_live: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLive') }})
    num_newer_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNewerVersions') }})
    

@dataclass_json
@dataclass
class BucketLifecycleRule:
    action: Optional[BucketLifecycleRuleAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    condition: Optional[BucketLifecycleRuleCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    

@dataclass_json
@dataclass
class BucketLifecycle:
    r"""BucketLifecycle
    The bucket's lifecycle configuration. See object lifecycle management for more information.
    """
    
    rule: Optional[List[BucketLifecycleRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    

@dataclass_json
@dataclass
class BucketLogging:
    r"""BucketLogging
    The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
    """
    
    log_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logBucket') }})
    log_object_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logObjectPrefix') }})
    

@dataclass_json
@dataclass
class BucketOwner:
    r"""BucketOwner
    The owner of the bucket. This is always the project team's owner group.
    """
    
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    

@dataclass_json
@dataclass
class BucketVersioning:
    r"""BucketVersioning
    The bucket's versioning configuration.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class BucketWebsite:
    r"""BucketWebsite
    The bucket's website configuration.
    """
    
    main_page_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPageSuffix') }})
    not_found_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notFoundPage') }})
    

@dataclass_json
@dataclass
class Bucket:
    r"""Bucket
    A bucket.
    """
    
    acl: Optional[List[BucketAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    cors: Optional[List[BucketCors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    default_object_acl: Optional[List[ObjectAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultObjectAcl') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lifecycle: Optional[BucketLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    logging: Optional[BucketLogging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    metageneration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metageneration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[BucketOwner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    time_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    versioning: Optional[BucketVersioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioning') }})
    website: Optional[BucketWebsite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
