from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1Tag:
    r"""GoogleCloudDatacatalogV1beta1Tag
    Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    fields: Optional[dict[str, GoogleCloudDatacatalogV1beta1TagField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    template_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateDisplayName') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TagInput:
    r"""GoogleCloudDatacatalogV1beta1TagInput
    Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    fields: Optional[dict[str, GoogleCloudDatacatalogV1beta1TagFieldInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
