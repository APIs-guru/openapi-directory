from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obexternalaccountsubtype1code_enum
from . import obexternalaccounttype1code_enum
from . import obbranchandfinancialinstitutionidentification5_0
from . import obaccountstatus1code_enum


@dataclass_json
@dataclass
class ObAccount6Account:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObAccount6:
    account: Optional[List[ObAccount6Account]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    account_sub_type: Optional[obexternalaccountsubtype1code_enum.ObExternalAccountSubType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountSubType' }})
    account_type: Optional[obexternalaccounttype1code_enum.ObExternalAccountType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountType' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    maturity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaturityDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nickname' }})
    opening_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    servicer: Optional[obbranchandfinancialinstitutionidentification5_0.ObBranchAndFinancialInstitutionIdentification50] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Servicer' }})
    status: Optional[obaccountstatus1code_enum.ObAccountStatus1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    switch_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SwitchStatus' }})
    
