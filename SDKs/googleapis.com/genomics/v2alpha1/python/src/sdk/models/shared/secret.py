from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Secret:
    r"""Secret
    Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
    """
    
    cipher_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipherText') }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyName') }})
    
