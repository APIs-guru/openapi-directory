from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Group:
    r"""Group
    The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: \"environment\" and \"role\". A parent group has a filter, environment=\"production\". A child of that parent group has a filter, role=\"transcoder\". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    is_cluster: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCluster') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentName') }})
    
