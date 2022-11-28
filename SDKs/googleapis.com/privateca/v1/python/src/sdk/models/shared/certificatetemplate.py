from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateTemplate:
    r"""CertificateTemplate
    A CertificateTemplate refers to a managed template for certificate issuance.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identity_constraints: Optional[CertificateIdentityConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityConstraints') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    passthrough_extensions: Optional[CertificateExtensionConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughExtensions') }})
    predefined_values: Optional[X509Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedValues') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class CertificateTemplateInput:
    r"""CertificateTemplateInput
    A CertificateTemplate refers to a managed template for certificate issuance.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identity_constraints: Optional[CertificateIdentityConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityConstraints') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    passthrough_extensions: Optional[CertificateExtensionConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughExtensions') }})
    predefined_values: Optional[X509Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedValues') }})
    
