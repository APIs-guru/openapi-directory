from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse:
    r"""GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse
    Response for the `UpdateServiceInstance()` method.
    """
    
    description: Optional[str] = field(default=None)
    operation: Optional[str] = field(default=None)
    
