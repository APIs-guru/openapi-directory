from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinksConversationsListSelf:
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class LinksConversationsList:
    r"""LinksConversationsList
    A series of links between resources in this API in the http://stateless.co/hal_specification.html.
    """
    
    self: LinksConversationsListSelf = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
