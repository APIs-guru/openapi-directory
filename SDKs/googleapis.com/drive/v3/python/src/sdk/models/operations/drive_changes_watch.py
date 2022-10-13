from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DriveChangesWatchQueryParams:
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
class DriveChangesWatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesWatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesWatchSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesWatchSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesWatchSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesWatchSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesWatchSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveChangesWatchSecurity:
    option1: Optional[DriveChangesWatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveChangesWatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DriveChangesWatchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DriveChangesWatchSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DriveChangesWatchSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DriveChangesWatchSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DriveChangesWatchSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveChangesWatchRequest:
    query_params: DriveChangesWatchQueryParams = field(default=None)
    request: Optional[shared.Channel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DriveChangesWatchSecurity = field(default=None)
    

@dataclass
class DriveChangesWatchResponse:
    channel: Optional[shared.Channel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
