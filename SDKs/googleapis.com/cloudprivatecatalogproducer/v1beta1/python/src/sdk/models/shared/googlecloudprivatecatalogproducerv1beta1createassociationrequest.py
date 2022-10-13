from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudprivatecatalogproducerv1beta1association


@dataclass_json
@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest:
    association: Optional[googlecloudprivatecatalogproducerv1beta1association.GoogleCloudPrivatecatalogproducerV1beta1Association] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'association' }})
    
