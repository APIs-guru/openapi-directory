from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleTypeDecimal:
    r"""GoogleTypeDecimal
    A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
    """
    
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
