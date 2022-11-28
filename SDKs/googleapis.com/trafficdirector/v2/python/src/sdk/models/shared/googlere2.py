from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleRe2:
    r"""GoogleRe2
    Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram `re2.program_size`, which records the program size, and the counter `re2.exceeded_warn_level`, which is incremented each time the program size exceeds the warn level threshold.
    """
    
    max_program_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxProgramSize') }})
    
