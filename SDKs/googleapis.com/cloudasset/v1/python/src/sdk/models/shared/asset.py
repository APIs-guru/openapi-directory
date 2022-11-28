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
class Asset:
    r"""Asset
    An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
    """
    
    access_level: Optional[GoogleIdentityAccesscontextmanagerV1AccessLevel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevel') }})
    access_policy: Optional[GoogleIdentityAccesscontextmanagerV1AccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicy') }})
    ancestors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestors') }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    iam_policy: Optional[Policy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPolicy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_policy: Optional[List[GoogleCloudOrgpolicyV1Policy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPolicy') }})
    os_inventory: Optional[Inventory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osInventory') }})
    related_asset: Optional[RelatedAsset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAsset') }})
    related_assets: Optional[RelatedAssets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedAssets') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service_perimeter: Optional[GoogleIdentityAccesscontextmanagerV1ServicePerimeter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePerimeter') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
