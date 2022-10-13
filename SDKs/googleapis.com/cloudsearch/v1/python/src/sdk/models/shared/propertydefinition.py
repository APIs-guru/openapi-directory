from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import booleanpropertyoptions
from . import datepropertyoptions
from . import propertydisplayoptions
from . import doublepropertyoptions
from . import enumpropertyoptions
from . import htmlpropertyoptions
from . import integerpropertyoptions
from . import objectpropertyoptions
from . import textpropertyoptions
from . import timestamppropertyoptions


@dataclass_json
@dataclass
class PropertyDefinition:
    boolean_property_options: Optional[booleanpropertyoptions.BooleanPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanPropertyOptions' }})
    date_property_options: Optional[datepropertyoptions.DatePropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datePropertyOptions' }})
    display_options: Optional[propertydisplayoptions.PropertyDisplayOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayOptions' }})
    double_property_options: Optional[doublepropertyoptions.DoublePropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doublePropertyOptions' }})
    enum_property_options: Optional[enumpropertyoptions.EnumPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumPropertyOptions' }})
    html_property_options: Optional[htmlpropertyoptions.HTMLPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlPropertyOptions' }})
    integer_property_options: Optional[integerpropertyoptions.IntegerPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerPropertyOptions' }})
    is_facetable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFacetable' }})
    is_repeatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRepeatable' }})
    is_returnable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReturnable' }})
    is_sortable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSortable' }})
    is_suggestable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSuggestable' }})
    is_wildcard_searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isWildcardSearchable' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_property_options: Optional[objectpropertyoptions.ObjectPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectPropertyOptions' }})
    text_property_options: Optional[textpropertyoptions.TextPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textPropertyOptions' }})
    timestamp_property_options: Optional[timestamppropertyoptions.TimestampPropertyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampPropertyOptions' }})
    
