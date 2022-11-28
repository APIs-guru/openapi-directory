from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LongviewClientApps:
    r"""LongviewClientApps
    The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
    
    """
    
    apache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apache') }})
    mysql: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql') }})
    nginx: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nginx') }})
    

@dataclass_json
@dataclass
class LongviewClientInput:
    r"""LongviewClientInput
    A LongviewClient is a single monitor set up to track statistics about one of your servers.
    
    """
    
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass_json
@dataclass
class LongviewClient:
    r"""LongviewClient
    A LongviewClient is a single monitor set up to track statistics about one of your servers.
    
    """
    
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    apps: Optional[LongviewClientApps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    install_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('install_code') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
