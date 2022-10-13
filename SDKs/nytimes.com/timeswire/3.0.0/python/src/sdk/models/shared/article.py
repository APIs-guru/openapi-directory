from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ArticleMultimedia:
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
class ArticleRelatedUrls:
    suggested_link_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggested_link_text' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Article:
    abstract: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abstract' }})
    blog_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog_name' }})
    byline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byline' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_date' }})
    des_facet: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'des_facet' }})
    geo_facet: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo_facet' }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headline' }})
    item_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_type' }})
    kicker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kicker' }})
    material_type_facet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material_type_facet' }})
    multimedia: Optional[List[ArticleMultimedia]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multimedia' }})
    org_facet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_facet' }})
    per_facet: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_facet' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_date' }})
    related_urls: Optional[List[ArticleRelatedUrls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_urls' }})
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    short_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_url' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    subsection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsection' }})
    thumbnail_standard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail_standard' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_date' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
