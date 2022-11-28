from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResultImage:
    r"""ResultImage
    Image belonging to a custom search result.
    """
    
    byte_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteSize') }})
    context_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextLink') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    thumbnail_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailHeight') }})
    thumbnail_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailLink') }})
    thumbnail_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailWidth') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class ResultLabels:
    r"""ResultLabels
    Refinement label associated with a custom search result.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    label_with_op: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_with_op') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class Result:
    r"""Result
    A custom search result.
    """
    
    cache_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheId') }})
    display_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayLink') }})
    file_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    formatted_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedUrl') }})
    html_formatted_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlFormattedUrl') }})
    html_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlSnippet') }})
    html_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlTitle') }})
    image: Optional[ResultImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[List[ResultLabels]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime') }})
    pagemap: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagemap') }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
