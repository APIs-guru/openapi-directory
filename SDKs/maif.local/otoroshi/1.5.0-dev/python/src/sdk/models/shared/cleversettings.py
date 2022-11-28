from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CleverSettings:
    r"""CleverSettings
    Configuration for CleverCloud client
    """
    
    consumer_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerKey') }})
    consumer_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerSecret') }})
    orga_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgaId') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
