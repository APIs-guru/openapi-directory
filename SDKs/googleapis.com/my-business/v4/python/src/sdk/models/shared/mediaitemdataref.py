from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MediaItemDataRef:
    r"""MediaItemDataRef
    Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem.
    """
    
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
