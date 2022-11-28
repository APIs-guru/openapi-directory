from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExternalUnifiedEvent:
    r"""ExternalUnifiedEvent
    Used to represent any event. With this format, the `objectType` and `eventType` values are stringified CRM types. Example object:
    <br/>
    ```
     {
          \"objectType\": \"CONTACT\",
          \"objectId\": 208451632,
          \"eventType\": \"e_visited_page\",
          \"occurredAt\": 1567377501421,
          \"id\": \"leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8\",
          \"properties\": {
              \"hs_url\": \"https://some-website.com/\",
              \"hs_title\": \"Home\",
              \"hs_referrer\": \"https://some-other-website.com/blog/why-we-love-big-data-and-you-should-too\",
              \"hs_userAgent\": \"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36\",
              \"hs_city\": \"lund\",
              \"hs_region\": \"m\",
              \"hs_country\": \"se\",
              \"hs_session_id\" : \"leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8\",
              \"hs_session_source\" : \"DIRECT\"
          }
      }      
    ```
    """
    
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    object_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    occurred_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurredAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    properties: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
