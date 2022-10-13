from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountdetails
from . import appintegrity
from . import deviceintegrity
from . import requestdetails
from . import testingdetails


@dataclass_json
@dataclass
class TokenPayloadExternal:
    account_details: Optional[accountdetails.AccountDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountDetails' }})
    app_integrity: Optional[appintegrity.AppIntegrity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIntegrity' }})
    device_integrity: Optional[deviceintegrity.DeviceIntegrity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceIntegrity' }})
    request_details: Optional[requestdetails.RequestDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestDetails' }})
    testing_details: Optional[testingdetails.TestingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testingDetails' }})
    
