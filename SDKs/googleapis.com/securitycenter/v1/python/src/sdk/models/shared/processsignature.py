from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import memoryhashsignature
from . import yararulesignature


@dataclass_json
@dataclass
class ProcessSignature:
    memory_hash_signature: Optional[memoryhashsignature.MemoryHashSignature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryHashSignature' }})
    yara_rule_signature: Optional[yararulesignature.YaraRuleSignature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yaraRuleSignature' }})
    
