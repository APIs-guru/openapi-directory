from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination

class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum(str, Enum):
    WRITE_DISPOSITION_UNSPECIFIED = "WRITE_DISPOSITION_UNSPECIFIED"
    WRITE_TRUNCATE = "WRITE_TRUNCATE"
    WRITE_APPEND = "WRITE_APPEND"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest:
    big_query_destination: Optional[googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQueryDestination' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    write_disposition: Optional[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeDisposition' }})
    
