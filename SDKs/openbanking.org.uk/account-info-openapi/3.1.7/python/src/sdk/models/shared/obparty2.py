from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObParty2Address:
    r"""ObParty2Address
    Postal address of a party.
    """
    
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    address_line: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressLine') }})
    address_type: Optional[ObAddressTypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressType') }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildingNumber') }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountrySubDivision') }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostCode') }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetName') }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TownName') }})
    

@dataclass_json
@dataclass
class ObParty2:
    party_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyId') }})
    account_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountRole') }})
    address: Optional[List[ObParty2Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    beneficial_ownership: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeneficialOwnership') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    full_legal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLegalName') }})
    legal_structure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LegalStructure') }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mobile') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    party_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyNumber') }})
    party_type: Optional[ObExternalPartyType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyType') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }})
    relationships: Optional[ObPartyRelationships1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Relationships') }})
    
