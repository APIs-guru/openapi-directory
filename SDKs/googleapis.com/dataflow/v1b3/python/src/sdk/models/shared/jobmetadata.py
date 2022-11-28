from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobMetadata:
    r"""JobMetadata
    Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
    """
    
    big_table_details: Optional[List[BigTableIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigTableDetails') }})
    bigquery_details: Optional[List[BigQueryIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDetails') }})
    datastore_details: Optional[List[DatastoreIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreDetails') }})
    file_details: Optional[List[FileIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDetails') }})
    pubsub_details: Optional[List[PubSubIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubDetails') }})
    sdk_version: Optional[SDKVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkVersion') }})
    spanner_details: Optional[List[SpannerIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spannerDetails') }})
    
