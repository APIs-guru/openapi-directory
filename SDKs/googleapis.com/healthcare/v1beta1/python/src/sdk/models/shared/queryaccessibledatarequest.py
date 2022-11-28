from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryAccessibleDataRequest:
    r"""QueryAccessibleDataRequest
    Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry).
    """
    
    gcs_destination: Optional[GoogleCloudHealthcareV1beta1ConsentGcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestAttributes') }})
    resource_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceAttributes') }})
    
