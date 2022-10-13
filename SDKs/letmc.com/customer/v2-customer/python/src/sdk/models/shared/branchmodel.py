from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BranchModel:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyName' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'County' }})
    e_mail_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EMailAddress' }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ETag' }})
    fax_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaxPhone' }})
    land_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LandPhone' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OID' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Postcode' }})
    web_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebAddress' }})
    
