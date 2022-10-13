from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigtableiodetails
from . import bigqueryiodetails
from . import datastoreiodetails
from . import fileiodetails
from . import pubsubiodetails
from . import sdkversion
from . import spanneriodetails


@dataclass_json
@dataclass
class JobMetadata:
    big_table_details: Optional[List[bigtableiodetails.BigTableIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigTableDetails' }})
    bigquery_details: Optional[List[bigqueryiodetails.BigQueryIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDetails' }})
    datastore_details: Optional[List[datastoreiodetails.DatastoreIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreDetails' }})
    file_details: Optional[List[fileiodetails.FileIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileDetails' }})
    pubsub_details: Optional[List[pubsubiodetails.PubSubIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubDetails' }})
    sdk_version: Optional[sdkversion.SdkVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkVersion' }})
    spanner_details: Optional[List[spanneriodetails.SpannerIoDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spannerDetails' }})
    
