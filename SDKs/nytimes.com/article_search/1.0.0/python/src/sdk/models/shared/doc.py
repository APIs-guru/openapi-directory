from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DocByline:
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original' }})
    person: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    

@dataclass_json
@dataclass
class DocHeadline:
    kicker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kicker' }})
    main: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'main' }})
    

@dataclass_json
@dataclass
class DocKeywords:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class DocMultimedia:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class Doc:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_id' }})
    abstract: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abstract' }})
    blog: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog' }})
    byline: Optional[DocByline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byline' }})
    document_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_type' }})
    headline: Optional[DocHeadline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headline' }})
    keywords: Optional[DocKeywords] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywords' }})
    lead_paragraph: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lead_paragraph' }})
    multimedia: Optional[List[DocMultimedia]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multimedia' }})
    news_desk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'news_desk' }})
    print_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'print_page' }})
    pub_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pub_date' }})
    section_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section_name' }})
    slideshow_credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slideshow_credits' }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    subsection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsection_name' }})
    type_of_material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_of_material' }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'web_url' }})
    word_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'word_count' }})
    
