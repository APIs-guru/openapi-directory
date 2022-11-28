from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SafeHTMLProto:
    r"""SafeHTMLProto
    IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.
    """
    
    private_do_not_access_or_else_safe_html_wrapped_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateDoNotAccessOrElseSafeHtmlWrappedValue') }})
    
