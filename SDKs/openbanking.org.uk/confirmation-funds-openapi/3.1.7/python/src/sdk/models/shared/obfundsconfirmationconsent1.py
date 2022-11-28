from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObFundsConfirmationConsent1DataDebtorAccount:
    r"""ObFundsConfirmationConsent1DataDebtorAccount
    Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObFundsConfirmationConsent1Data:
    debtor_account: ObFundsConfirmationConsent1DataDebtorAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    expiration_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObFundsConfirmationConsent1:
    data: ObFundsConfirmationConsent1Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
