from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class DriveChangesListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    drive_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'driveId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_corpus_removals: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeCorpusRemovals', 'style': 'form', 'explode': True }})
    include_items_from_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeItemsFromAllDrives', 'style': 'form', 'explode': True }})
    include_labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeLabels', 'style': 'form', 'explode': True }})
    include_permissions_for_view: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includePermissionsForView', 'style': 'form', 'explode': True }})
    include_removed: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeRemoved', 'style': 'form', 'explode': True }})
    include_team_drive_items: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeTeamDriveItems', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: str = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    restrict_to_my_drive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'restrictToMyDrive', 'style': 'form', 'explode': True }})
    spaces: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'spaces', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    team_drive_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamDriveId', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveChangesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesListSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesListSecurity:
    option1: Optional[DriveChangesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveChangesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveChangesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveChangesListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveChangesListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveChangesListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveChangesListSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveChangesListRequest:
    query_params: DriveChangesListQueryParams = field(default=None)
    security: DriveChangesListSecurity = field(default=None)
    

@dataclass
class DriveChangesListResponse:
    change_list: Optional[shared.ChangeList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
