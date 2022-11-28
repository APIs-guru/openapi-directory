from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions:
    sourceupdate: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource:
    package: Optional[str] = field(default=None)
    project: Optional[str] = field(default=None)
    rev: Optional[int] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget:
    package: Optional[str] = field(default=None)
    project: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction:
    options: Optional[OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions] = field(default=None)
    source: Optional[OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource] = field(default=None)
    target: Optional[OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget] = field(default=None)
    type: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory:
    comment: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    when: Optional[str] = field(default=None)
    who: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview1:
    by_user: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    when: Optional[str] = field(default=None)
    who: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview2:
    by_group: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    when: Optional[str] = field(default=None)
    who: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview3:
    by_project: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    when: Optional[str] = field(default=None)
    who: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview4:
    by_package: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    when: Optional[str] = field(default=None)
    who: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState:
    comment: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    when: Optional[str] = field(default=None)
    who: Optional[str] = field(default=None)
    

@dataclass
class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8Schema:
    action: Optional[OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction] = field(default=None)
    creator: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    history: Optional[List[OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory]] = field(default=None)
    id: Optional[int] = field(default=None)
    review: Optional[List[Any]] = field(default=None)
    state: Optional[OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState] = field(default=None)
    
