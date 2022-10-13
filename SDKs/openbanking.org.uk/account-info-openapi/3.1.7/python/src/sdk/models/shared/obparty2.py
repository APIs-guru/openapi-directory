from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obaddresstypecode_enum
from . import obexternalpartytype1code_enum
from . import obpartyrelationships1


@dataclass_json
@dataclass
class ObParty2Address:
    address_line: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine' }})
    address_type: Optional[obaddresstypecode_enum.ObAddressTypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressType' }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildingNumber' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountrySubDivision' }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostCode' }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreetName' }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TownName' }})
    

@dataclass_json
@dataclass
class ObParty2:
    account_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountRole' }})
    address: Optional[List[ObParty2Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    beneficial_ownership: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeneficialOwnership' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    full_legal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLegalName' }})
    legal_structure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LegalStructure' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mobile' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    party_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyId' }})
    party_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyNumber' }})
    party_type: Optional[obexternalpartytype1code_enum.ObExternalPartyType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyType' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phone' }})
    relationships: Optional[obpartyrelationships1.ObPartyRelationships1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Relationships' }})
    
