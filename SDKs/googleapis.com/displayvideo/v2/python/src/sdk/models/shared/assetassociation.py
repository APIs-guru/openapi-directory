from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import asset

class AssetAssociationRoleEnum(str, Enum):
    ASSET_ROLE_UNSPECIFIED = "ASSET_ROLE_UNSPECIFIED"
    ASSET_ROLE_MAIN = "ASSET_ROLE_MAIN"
    ASSET_ROLE_BACKUP = "ASSET_ROLE_BACKUP"
    ASSET_ROLE_POLITE_LOAD = "ASSET_ROLE_POLITE_LOAD"
    ASSET_ROLE_HEADLINE = "ASSET_ROLE_HEADLINE"
    ASSET_ROLE_LONG_HEADLINE = "ASSET_ROLE_LONG_HEADLINE"
    ASSET_ROLE_BODY = "ASSET_ROLE_BODY"
    ASSET_ROLE_LONG_BODY = "ASSET_ROLE_LONG_BODY"
    ASSET_ROLE_CAPTION_URL = "ASSET_ROLE_CAPTION_URL"
    ASSET_ROLE_CALL_TO_ACTION = "ASSET_ROLE_CALL_TO_ACTION"
    ASSET_ROLE_ADVERTISER_NAME = "ASSET_ROLE_ADVERTISER_NAME"
    ASSET_ROLE_PRICE = "ASSET_ROLE_PRICE"
    ASSET_ROLE_ANDROID_APP_ID = "ASSET_ROLE_ANDROID_APP_ID"
    ASSET_ROLE_IOS_APP_ID = "ASSET_ROLE_IOS_APP_ID"
    ASSET_ROLE_RATING = "ASSET_ROLE_RATING"
    ASSET_ROLE_ICON = "ASSET_ROLE_ICON"
    ASSET_ROLE_COVER_IMAGE = "ASSET_ROLE_COVER_IMAGE"


@dataclass_json
@dataclass
class AssetAssociation:
    asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    role: Optional[AssetAssociationRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
