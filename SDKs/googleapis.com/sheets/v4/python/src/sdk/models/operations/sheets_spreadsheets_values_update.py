from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SheetsSpreadsheetsValuesUpdatePathParams:
    range: str = field(metadata={'path_param': { 'field_name': 'range', 'style': 'simple', 'explode': False }})
    spreadsheet_id: str = field(metadata={'path_param': { 'field_name': 'spreadsheetId', 'style': 'simple', 'explode': False }})
    
class SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"

class SheetsSpreadsheetsValuesUpdateValueInputOptionEnum(str, Enum):
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED"
    RAW = "RAW"
    USER_ENTERED = "USER_ENTERED"


@dataclass
class SheetsSpreadsheetsValuesUpdateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_values_in_response: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeValuesInResponse', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    response_date_time_render_option: Optional[SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'responseDateTimeRenderOption', 'style': 'form', 'explode': True }})
    response_value_render_option: Optional[SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'responseValueRenderOption', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    value_input_option: Optional[SheetsSpreadsheetsValuesUpdateValueInputOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'valueInputOption', 'style': 'form', 'explode': True }})
    

@dataclass
class SheetsSpreadsheetsValuesUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesUpdateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesUpdateSecurity:
    option1: Optional[SheetsSpreadsheetsValuesUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SheetsSpreadsheetsValuesUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SheetsSpreadsheetsValuesUpdateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SheetsSpreadsheetsValuesUpdateRequest:
    path_params: SheetsSpreadsheetsValuesUpdatePathParams = field()
    query_params: SheetsSpreadsheetsValuesUpdateQueryParams = field()
    security: SheetsSpreadsheetsValuesUpdateSecurity = field()
    request: Optional[shared.ValueRange] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SheetsSpreadsheetsValuesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    update_values_response: Optional[shared.UpdateValuesResponse] = field(default=None)
    
