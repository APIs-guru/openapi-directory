from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1Product:
    r"""GoogleCloudPrivatecatalogproducerV1beta1Product
    The producer representation of a product which is a child resource of
    `Catalog` with display metadata and a list of `Version` resources.
    """
    
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMetadata') }})
    icon_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
