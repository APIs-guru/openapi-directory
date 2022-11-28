from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PropertyDefinition:
    r"""PropertyDefinition
    The definition of a property within an object.
    """
    
    boolean_property_options: Optional[BooleanPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanPropertyOptions') }})
    date_property_options: Optional[DatePropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datePropertyOptions') }})
    display_options: Optional[PropertyDisplayOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOptions') }})
    double_property_options: Optional[DoublePropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doublePropertyOptions') }})
    enum_property_options: Optional[EnumPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumPropertyOptions') }})
    html_property_options: Optional[HTMLPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlPropertyOptions') }})
    integer_property_options: Optional[IntegerPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerPropertyOptions') }})
    is_facetable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFacetable') }})
    is_repeatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRepeatable') }})
    is_returnable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReturnable') }})
    is_sortable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSortable') }})
    is_suggestable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSuggestable') }})
    is_wildcard_searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isWildcardSearchable') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object_property_options: Optional[ObjectPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectPropertyOptions') }})
    text_property_options: Optional[TextPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textPropertyOptions') }})
    timestamp_property_options: Optional[TimestampPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampPropertyOptions') }})
    
