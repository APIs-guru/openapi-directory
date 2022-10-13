from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import attachedresource
from . import relatedresources
from . import versionedresource


@dataclass_json
@dataclass
class ResourceSearchResult:
    additional_attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAttributes' }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    attached_resources: Optional[List[attachedresource.AttachedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachedResources' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    kms_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeys' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTags' }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    parent_asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentAssetType' }})
    parent_full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFullResourceName' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    relationships: Optional[dict[str, relatedresources.RelatedResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tag_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKeys' }})
    tag_value_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValueIds' }})
    tag_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValues' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    versioned_resources: Optional[List[versionedresource.VersionedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionedResources' }})
    
