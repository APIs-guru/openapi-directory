from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1Association:
    r"""GoogleCloudPrivatecatalogproducerV1beta1Association
    An association tuple that pairs a `Catalog` to a resource
    that can use the `Catalog`. After association, a
    google.cloud.privatecatalog.v1beta1.Catalog becomes available to
    consumers under specified Association.resource and all of its child
    nodes.
    Users who have the `cloudprivatecatalog.targets.get` permission on any of
    the resource nodes can access the catalog and child products under the node.
    
    For example, suppose the cloud resource hierarchy is as follows:
    
    * organizations/example.com
      * folders/team
        * projects/test
    
    After creating an association with `organizations/example.com`, the catalog
    `catalogs/1`  is accessible from the following paths:
    
    * organizations/example.com
    * folders/team
    * projects/test
    
    Users can access them by
    google.cloud.v1beta1.PrivateCatalog.SearchCatalogs action.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
