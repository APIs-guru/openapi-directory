from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class ArticlesListArticles:
    bite: Optional[str] = field(default=None)
    categories: Optional[List[List[str]]] = field(default=None)
    content: Optional[str] = field(default=None)
    date_: Optional[str] = field(default=None)
    excerpt: Optional[str] = field(default=None)
    featured: Optional[bool] = field(default=None)
    id: Optional[str] = field(default=None)
    lang: Optional[str] = field(default=None)
    layout: Optional[str] = field(default=None)
    meta_description: Optional[str] = field(default=None)
    meta_title: Optional[str] = field(default=None)
    path: Optional[str] = field(default=None)
    published: Optional[bool] = field(default=None)
    related: Optional[List[List[str]]] = field(default=None)
    seo_keywords: Optional[str] = field(default=None)
    sort: Optional[float] = field(default=None)
    tags: Optional[List[List[Any]]] = field(default=None)
    title: Optional[str] = field(default=None)
    title_short: Optional[str] = field(default=None)
    topics: Optional[List[List[str]]] = field(default=None)
    url: Optional[str] = field(default=None)
    

@dataclass
class ArticlesList:
    articles: Optional[List[ArticlesListArticles]] = field(default=None)
    
