from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppIcons:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUrl') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class App:
    r"""App
    The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
    """
    
    authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized') }})
    create_in_folder_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createInFolderTemplate') }})
    create_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createUrl') }})
    has_drive_wide_scope: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasDriveWideScope') }})
    icons: Optional[List[AppIcons]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icons') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installed') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDescription') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    open_url_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openUrlTemplate') }})
    primary_file_extensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryFileExtensions') }})
    primary_mime_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryMimeTypes') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productUrl') }})
    secondary_file_extensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryFileExtensions') }})
    secondary_mime_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryMimeTypes') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    supports_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsCreate') }})
    supports_import: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsImport') }})
    supports_multi_open: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsMultiOpen') }})
    supports_offline_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsOfflineCreate') }})
    use_by_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useByDefault') }})
    
