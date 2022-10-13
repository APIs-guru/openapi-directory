from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lintresult


@dataclass_json
@dataclass
class LintPolicyResponse:
    lint_results: Optional[List[lintresult.LintResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lintResults' }})
    
