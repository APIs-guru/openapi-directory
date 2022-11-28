from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1beta1EntityFilter:
    r"""GoogleDatastoreAdminV1beta1EntityFilter
    Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
    """
    
    kinds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kinds') }})
    namespace_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceIds') }})
    
