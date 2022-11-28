from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TermXRef:
    key: Optional[int] = field(default=None)
    term_acc: Optional[str] = field(default=None)
    xref_description: Optional[str] = field(default=None)
    xref_value: Optional[str] = field(default=None)
    
