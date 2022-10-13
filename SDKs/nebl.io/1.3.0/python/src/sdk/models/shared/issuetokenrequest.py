from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssueTokenRequestFlags:
    split_change: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splitChange' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataEncryptions:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    pubkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubkey' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesExpiration:
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    valid_until: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validUntil' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesFeesItems:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenId' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesFees:
    items: Optional[List[IssueTokenRequestMetadataRulesFeesItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRulesHolders:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataRules:
    expiration: Optional[IssueTokenRequestMetadataRulesExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    fees: Optional[IssueTokenRequestMetadataRulesFees] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fees' }})
    holders: Optional[List[IssueTokenRequestMetadataRulesHolders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holders' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataUrls:
    data_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataHash' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataUserDataMeta:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadataUserData:
    meta: Optional[List[IssueTokenRequestMetadataUserDataMeta]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestMetadata:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encryptions: Optional[List[IssueTokenRequestMetadataEncryptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptions' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    rules: Optional[IssueTokenRequestMetadataRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    token_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenName' }})
    urls: Optional[List[IssueTokenRequestMetadataUrls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    user_data: Optional[IssueTokenRequestMetadataUserData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userData' }})
    

@dataclass_json
@dataclass
class IssueTokenRequestTransfer:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    

@dataclass_json
@dataclass
class IssueTokenRequest:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    divisibility: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'divisibility' }})
    fee: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee' }})
    flags: Optional[IssueTokenRequestFlags] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    issue_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueAddress' }})
    metadata: Optional[IssueTokenRequestMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    reissuable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reissuable' }})
    transfer: List[IssueTokenRequestTransfer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    
