from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fieldmetadata


@dataclass_json
@dataclass
class Name:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    display_name_last_first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayNameLastFirst' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    honorific_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'honorificPrefix' }})
    honorific_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'honorificSuffix' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middleName' }})
    phonetic_family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneticFamilyName' }})
    phonetic_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneticFullName' }})
    phonetic_given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneticGivenName' }})
    phonetic_honorific_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneticHonorificPrefix' }})
    phonetic_honorific_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneticHonorificSuffix' }})
    phonetic_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneticMiddleName' }})
    unstructured_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unstructuredName' }})
    
