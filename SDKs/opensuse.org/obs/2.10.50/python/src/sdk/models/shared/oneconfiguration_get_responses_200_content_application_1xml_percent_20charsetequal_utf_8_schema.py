from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class OneconfigurationGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaSchedulers:
    arch: Optional[List[str]] = field(default=None)
    

@dataclass
class OneconfigurationGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema:
    admin_email: Optional[str] = field(default=None)
    allow_user_to_create_home_project: Optional[str] = field(default=None)
    anonymous: Optional[str] = field(default=None)
    change_password: Optional[str] = field(default=None)
    cleanup_empty_projects: Optional[str] = field(default=None)
    default_access_disabled: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    disable_publish_for_branches: Optional[str] = field(default=None)
    disallow_group_creation: Optional[str] = field(default=None)
    download_on_demand: Optional[str] = field(default=None)
    enforce_project_keys: Optional[str] = field(default=None)
    gravatar: Optional[str] = field(default=None)
    hide_private_options: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    obs_url: Optional[str] = field(default=None)
    registration: Optional[str] = field(default=None)
    schedulers: Optional[OneconfigurationGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaSchedulers] = field(default=None)
    title: Optional[str] = field(default=None)
    tos_url: Optional[str] = field(default=None)
    unlisted_projects_filter: Optional[str] = field(default=None)
    unlisted_projects_filter_description: Optional[str] = field(default=None)
    
