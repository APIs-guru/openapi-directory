from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Tag:
    r"""GoogleCloudDatacatalogV1Tag
    Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    fields: Optional[dict[str, GoogleCloudDatacatalogV1TagField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    template_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateDisplayName') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1TagInput:
    r"""GoogleCloudDatacatalogV1TagInput
    Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    fields: Optional[dict[str, GoogleCloudDatacatalogV1TagFieldInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
