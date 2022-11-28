from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class TopicsListTopics:
    articleorder: Optional[List[List[str]]] = field(default=None)
    categories: Optional[List[List[Any]]] = field(default=None)
    content: Optional[str] = field(default=None)
    date_: Optional[str] = field(default=None)
    excerpt: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    lang: Optional[str] = field(default=None)
    layout: Optional[str] = field(default=None)
    meta_description: Optional[str] = field(default=None)
    meta_title: Optional[str] = field(default=None)
    order: Optional[float] = field(default=None)
    path: Optional[str] = field(default=None)
    published: Optional[bool] = field(default=None)
    sort: Optional[float] = field(default=None)
    tags: Optional[List[List[str]]] = field(default=None)
    title: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    

@dataclass
class TopicsList:
    topics: Optional[List[TopicsListTopics]] = field(default=None)
    
