from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Investigation:
    child_documents_: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_childDocuments_') }})
    assay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assay') }})
    document_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_uuid') }})
    effectendpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectendpoint') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    endpointcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointcategory') }})
    err: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('err') }})
    err_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errQualifier') }})
    guidance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guidance') }})
    investigation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('investigation') }})
    lo_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loQualifier') }})
    lo_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_name') }})
    publicname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicname') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    reference_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_owner') }})
    reference_year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_year') }})
    resulttype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resulttype') }})
    s_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s_uuid') }})
    study_result_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studyResultType') }})
    substance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('substanceType') }})
    text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textValue') }})
    topcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topcategory') }})
    type_s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_s') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    up_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upQualifier') }})
    up_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upValue') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    
