from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuntimeGuestOsFeature:
    r"""RuntimeGuestOsFeature
    Optional. A list of features to enable on the guest operating system. Applicable only for bootable images. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Guest OS features for boot disk.
    """
    
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
