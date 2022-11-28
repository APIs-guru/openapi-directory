from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Domain:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_resolving: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isResolving') }})
    is_used_for_blog_post: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUsedForBlogPost') }})
    is_used_for_email: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUsedForEmail') }})
    is_used_for_knowledge: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUsedForKnowledge') }})
    is_used_for_landing_page: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUsedForLandingPage') }})
    is_used_for_site_page: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUsedForSitePage') }})
    correct_cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctCname') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_ssl_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSslEnabled') }})
    is_ssl_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSslOnly') }})
    manually_marked_as_resolving: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manuallyMarkedAsResolving') }})
    primary_blog_post: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryBlogPost') }})
    primary_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryEmail') }})
    primary_knowledge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryKnowledge') }})
    primary_landing_page: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryLandingPage') }})
    primary_site_page: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primarySitePage') }})
    secondary_to_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryToDomain') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
