from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1accesslevel
from . import googleidentityaccesscontextmanagerv1accesspolicy
from . import policy
from . import googlecloudorgpolicyv1policy
from . import resource
from . import googleidentityaccesscontextmanagerv1serviceperimeter


@dataclass_json
@dataclass
class Asset:
    access_level: Optional[googleidentityaccesscontextmanagerv1accesslevel.GoogleIdentityAccesscontextmanagerV1AccessLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevel' }})
    access_policy: Optional[googleidentityaccesscontextmanagerv1accesspolicy.GoogleIdentityAccesscontextmanagerV1AccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicy' }})
    ancestors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestors' }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    iam_policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamPolicy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_policy: Optional[List[googlecloudorgpolicyv1policy.GoogleCloudOrgpolicyV1Policy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgPolicy' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    service_perimeter: Optional[googleidentityaccesscontextmanagerv1serviceperimeter.GoogleIdentityAccesscontextmanagerV1ServicePerimeter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicePerimeter' }})
    
