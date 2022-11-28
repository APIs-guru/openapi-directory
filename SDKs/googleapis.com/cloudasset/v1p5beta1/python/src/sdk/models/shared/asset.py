from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Asset:
    r"""Asset
    An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
    """
    
    access_level: Optional[GoogleIdentityAccesscontextmanagerV1AccessLevel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevel') }})
    access_policy: Optional[GoogleIdentityAccesscontextmanagerV1AccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicy') }})
    ancestors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestors') }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    iam_policy: Optional[Policy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPolicy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_policy: Optional[List[GoogleCloudOrgpolicyV1Policy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPolicy') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service_perimeter: Optional[GoogleIdentityAccesscontextmanagerV1ServicePerimeter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePerimeter') }})
    
