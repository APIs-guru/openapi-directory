from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GoogleCloudPrivatecatalogV1beta1Product:
    r"""GoogleCloudPrivatecatalogV1beta1Product
    The readonly representation of a product computed with a given resource
    context.
    """
    
    asset_type: Optional[str] = field(default=None)
    create_time: Optional[str] = field(default=None)
    display_metadata: Optional[dict[str, Any]] = field(default=None)
    icon_uri: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    update_time: Optional[str] = field(default=None)
    
