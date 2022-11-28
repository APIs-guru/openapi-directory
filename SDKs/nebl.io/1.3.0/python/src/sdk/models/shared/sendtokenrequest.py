from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendTokenRequestFlags:
    r"""SendTokenRequestFlags
    Object representing flags that potentialy modify this transaction
    """
    
    split_change: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitChange') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataEncryptions:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    pubkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubkey') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataRulesExpiration:
    r"""SendTokenRequestMetadataRulesExpiration
    Object describing expiration rules of the token
    """
    
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    valid_until: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataRulesFeesItems:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataRulesFees:
    items: Optional[List[SendTokenRequestMetadataRulesFeesItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataRulesHolders:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataRules:
    r"""SendTokenRequestMetadataRules
    Object describing token rules
    """
    
    expiration: Optional[SendTokenRequestMetadataRulesExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    fees: Optional[SendTokenRequestMetadataRulesFees] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    holders: Optional[List[SendTokenRequestMetadataRulesHolders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holders') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataUrls:
    data_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataHash') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataUserDataMeta:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadataUserData:
    r"""SendTokenRequestMetadataUserData
    Metadata set by user on token
    """
    
    meta: Optional[List[SendTokenRequestMetadataUserDataMeta]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class SendTokenRequestMetadata:
    r"""SendTokenRequestMetadata
    Object representing all metadata at token issuance
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryptions: Optional[List[SendTokenRequestMetadataEncryptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptions') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    rules: Optional[SendTokenRequestMetadataRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    token_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    urls: Optional[List[SendTokenRequestMetadataUrls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_data: Optional[SendTokenRequestMetadataUserData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclass
class SendTokenRequestTo:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    

@dataclass_json
@dataclass
class SendTokenRequest:
    fee: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fee') }})
    to: List[SendTokenRequestTo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    flags: Optional[SendTokenRequestFlags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    from_: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    metadata: Optional[SendTokenRequestMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    sendutxo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendutxo') }})
    
