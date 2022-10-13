from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deviceprofile
from . import generalcommandtype_enum


@dataclass_json
@dataclass
class ClientCapabilities:
    app_store_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppStoreUrl' }})
    device_profile: Optional[deviceprofile.DeviceProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceProfile' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IconUrl' }})
    message_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageCallbackUrl' }})
    playable_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayableMediaTypes' }})
    supported_commands: Optional[List[generalcommandtype_enum.GeneralCommandTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedCommands' }})
    supports_content_uploading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsContentUploading' }})
    supports_media_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsMediaControl' }})
    supports_persistent_identifier: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsPersistentIdentifier' }})
    supports_sync: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsSync' }})
    
