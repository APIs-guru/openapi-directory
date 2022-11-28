from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppBundle:
    r"""AppBundle
    An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.
    """
    
    bundle_location: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleLocation') }})
    
