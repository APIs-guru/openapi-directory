from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obcashaccount5
from . import obexternalaccountsubtype1code_enum
from . import obexternalaccounttype1code_enum
from . import obbranchandfinancialinstitutionidentification5


@dataclass_json
@dataclass
class ObAccount6:
    account: Optional[List[obcashaccount5.ObCashAccount5]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    account_sub_type: obexternalaccountsubtype1code_enum.ObExternalAccountSubType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountSubType' }})
    account_type: obexternalaccounttype1code_enum.ObExternalAccountType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountType' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nickname' }})
    opening_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    servicer: Optional[obbranchandfinancialinstitutionidentification5.ObBranchAndFinancialInstitutionIdentification5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Servicer' }})
    
