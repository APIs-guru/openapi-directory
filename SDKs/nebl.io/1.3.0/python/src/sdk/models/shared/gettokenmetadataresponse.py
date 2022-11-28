from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GetTokenMetadataResponseMetadataOfIssuanceDataUserData:
    r"""GetTokenMetadataResponseMetadataOfIssuanceDataUserData
    Metadata set by user on token
    """
    
    meta: Optional[List[GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTokenMetadataResponseMetadataOfIssuanceData:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    token_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    user_data: Optional[GetTokenMetadataResponseMetadataOfIssuanceDataUserData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclass
class GetTokenMetadataResponseMetadataOfIssuance:
    r"""GetTokenMetadataResponseMetadataOfIssuance
    Metadata set at issuance
    """
    
    data: Optional[GetTokenMetadataResponseMetadataOfIssuanceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class GetTokenMetadataResponseMetadataOfUtxoUserData:
    r"""GetTokenMetadataResponseMetadataOfUtxoUserData
    Metadata set by user on token for UTXO
    """
    
    meta: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTokenMetadataResponseMetadataOfUtxo:
    r"""GetTokenMetadataResponseMetadataOfUtxo
    Metadata set for UTXO
    """
    
    user_data: Optional[GetTokenMetadataResponseMetadataOfUtxoUserData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclass
class GetTokenMetadataResponse:
    aggregation_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPolicy') }})
    divisibility: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisibility') }})
    first_block: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBlock') }})
    initial_issuance_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialIssuanceAmount') }})
    issuance_txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuanceTxid') }})
    issue_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueAddress') }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    metadata_of_issuance: Optional[GetTokenMetadataResponseMetadataOfIssuance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataOfIssuance') }})
    metadata_of_utxo: Optional[GetTokenMetadataResponseMetadataOfUtxo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataOfUtxo') }})
    num_of_burns: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfBurns') }})
    num_of_holders: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfHolders') }})
    num_of_issuance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfIssuance') }})
    num_of_transfers: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfTransfers') }})
    some_utxo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('someUtxo') }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    total_supply: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSupply') }})
    
