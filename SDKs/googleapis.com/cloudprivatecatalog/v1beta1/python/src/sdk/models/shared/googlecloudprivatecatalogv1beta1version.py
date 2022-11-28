from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GoogleCloudPrivatecatalogV1beta1Version:
    r"""GoogleCloudPrivatecatalogV1beta1Version
    The consumer representation of a version which is a child resource under a
    `Product` with asset data.
    """
    
    asset: Optional[dict[str, Any]] = field(default=None)
    create_time: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    update_time: Optional[str] = field(default=None)
    
