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
class BucketAutoclass:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    toggle_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toggleTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class BucketBilling:
    requester_pays: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requesterPays' }})
    

@dataclass_json
@dataclass
class BucketCors:
    max_age_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAgeSeconds' }})
    method: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    origin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    response_header: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseHeader' }})
    

@dataclass_json
@dataclass
class BucketCustomPlacementConfig:
    data_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataLocations' }})
    

@dataclass_json
@dataclass
class BucketEncryption:
    default_kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultKmsKeyName' }})
    

@dataclass_json
@dataclass
class BucketIamConfigurationBucketPolicyOnly:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    locked_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class BucketIamConfigurationUniformBucketLevelAccess:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    locked_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class BucketIamConfiguration:
    bucket_policy_only: Optional[BucketIamConfigurationBucketPolicyOnly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPolicyOnly' }})
    public_access_prevention: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAccessPrevention' }})
    uniform_bucket_level_access: Optional[BucketIamConfigurationUniformBucketLevelAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniformBucketLevelAccess' }})
    

@dataclass_json
@dataclass
class BucketLifecycleRuleAction:
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageClass' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class BucketLifecycleRuleCondition:
    age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age' }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    days_since_custom_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daysSinceCustomTime' }})
    days_since_noncurrent_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daysSinceNoncurrentTime' }})
    is_live: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLive' }})
    matches_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesPattern' }})
    matches_prefix: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesPrefix' }})
    matches_storage_class: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesStorageClass' }})
    matches_suffix: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesSuffix' }})
    noncurrent_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noncurrentTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
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
class BucketRetentionPolicy:
    effective_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocked' }})
    retention_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    

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
    autoclass: Optional[BucketAutoclass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoclass' }})
    billing: Optional[BucketBilling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing' }})
    cors: Optional[List[BucketCors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    custom_placement_config: Optional[BucketCustomPlacementConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPlacementConfig' }})
    default_event_based_hold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultEventBasedHold' }})
    default_object_acl: Optional[List[objectaccesscontrol.ObjectAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultObjectAcl' }})
    encryption: Optional[BucketEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryption' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    iam_configuration: Optional[BucketIamConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamConfiguration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lifecycle: Optional[BucketLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    location_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    logging: Optional[BucketLogging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    metageneration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metageneration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[BucketOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectNumber' }})
    retention_policy: Optional[BucketRetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPolicy' }})
    rpo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rpo' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPZS' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageClass' }})
    time_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    versioning: Optional[BucketVersioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioning' }})
    website: Optional[BucketWebsite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
