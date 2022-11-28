from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IssueTokenRequestFlags:
    r"""IssueTokenRequestFlags
    Object representing flags that potentialy modify this transaction
    """
    
    split_change: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitChange') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataEncryptions:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    pubkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubkey') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesExpiration:
    r"""IssueTokenRequestMetadataRulesExpiration
    Object describing expiration rules of the token
    """
    
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    valid_until: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesFeesItems:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesFees:
    items: Optional[List[IssueTokenRequestMetadataRulesFeesItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesHolders:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRules:
    r"""IssueTokenRequestMetadataRules
    Object describing token rules
    """
    
    expiration: Optional[IssueTokenRequestMetadataRulesExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    fees: Optional[IssueTokenRequestMetadataRulesFees] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    holders: Optional[List[IssueTokenRequestMetadataRulesHolders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holders') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataUrls:
    data_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataHash') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataUserDataMeta:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataUserData:
    r"""IssueTokenRequestMetadataUserData
    Metadata set by user on token
    """
    
    meta: Optional[List[IssueTokenRequestMetadataUserDataMeta]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadata:
    r"""IssueTokenRequestMetadata
    Object representing all metadata at token issuance
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryptions: Optional[List[IssueTokenRequestMetadataEncryptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptions') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    rules: Optional[IssueTokenRequestMetadataRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    token_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    urls: Optional[List[IssueTokenRequestMetadataUrls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_data: Optional[IssueTokenRequestMetadataUserData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

@dataclass_json
@dataclass
class IssueTokenRequestTransfer:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    

@dataclass_json
@dataclass
class IssueTokenRequest:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    divisibility: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisibility') }})
    fee: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fee') }})
    issue_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueAddress') }})
    reissuable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reissuable') }})
    transfer: List[IssueTokenRequestTransfer] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    flags: Optional[IssueTokenRequestFlags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    metadata: Optional[IssueTokenRequestMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
