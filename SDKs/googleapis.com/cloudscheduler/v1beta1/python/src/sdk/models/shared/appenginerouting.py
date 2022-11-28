from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppEngineRouting:
    r"""AppEngineRouting
    App Engine Routing. For more information about services, versions, and instances see [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine), [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine), [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed), and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
    """
    
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
