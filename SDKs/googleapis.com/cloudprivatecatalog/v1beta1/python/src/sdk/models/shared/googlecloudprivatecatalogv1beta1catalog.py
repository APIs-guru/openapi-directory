from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GoogleCloudPrivatecatalogV1beta1Catalog:
    r"""GoogleCloudPrivatecatalogV1beta1Catalog
    The readonly representation of a catalog computed with a given resource
    context.
    """
    
    create_time: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    display_name: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    update_time: Optional[str] = field(default=None)
    
