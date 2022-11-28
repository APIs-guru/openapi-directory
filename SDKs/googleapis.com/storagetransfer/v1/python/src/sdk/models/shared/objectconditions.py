from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectConditions:
    r"""ObjectConditions
    Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The \"last modification time\" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.
    """
    
    exclude_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludePrefixes') }})
    include_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includePrefixes') }})
    last_modified_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedBefore') }})
    last_modified_since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedSince') }})
    max_time_elapsed_since_last_modification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTimeElapsedSinceLastModification') }})
    min_time_elapsed_since_last_modification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTimeElapsedSinceLastModification') }})
    
