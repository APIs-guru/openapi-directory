from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectaccesscontrol


@dataclass_json
@dataclass
class ObjectCustomerEncryption:
    encryption_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionAlgorithm' }})
    key_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keySha256' }})
    

@dataclass_json
@dataclass
class ObjectOwner:
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    

@dataclass_json
@dataclass
class Object:
    acl: Optional[List[objectaccesscontrol.ObjectAccessControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    cache_control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheControl' }})
    component_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentCount' }})
    content_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDisposition' }})
    content_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentEncoding' }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLanguage' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crc32c' }})
    custom_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_encryption: Optional[ObjectCustomerEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerEncryption' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    event_based_hold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventBasedHold' }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    md5_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5Hash' }})
    media_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaLink' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    metageneration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metageneration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[ObjectOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    retention_expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionExpirationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageClass' }})
    temporary_hold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporaryHold' }})
    time_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_deleted: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeDeleted', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_storage_class_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStorageClassUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
