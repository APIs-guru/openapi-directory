from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SheetsSpreadsheetsValuesAppendPathParams:
    range: str = field(metadata={'path_param': { 'field_name': 'range', 'style': 'simple', 'explode': False }})
    spreadsheet_id: str = field(metadata={'path_param': { 'field_name': 'spreadsheetId', 'style': 'simple', 'explode': False }})
    
class SheetsSpreadsheetsValuesAppendInsertDataOptionEnum(str, Enum):
    OVERWRITE = "OVERWRITE"
    INSERT_ROWS = "INSERT_ROWS"

class SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"

class SheetsSpreadsheetsValuesAppendValueInputOptionEnum(str, Enum):
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED"
    RAW = "RAW"
    USER_ENTERED = "USER_ENTERED"


@dataclass
class SheetsSpreadsheetsValuesAppendQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_values_in_response: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeValuesInResponse', 'style': 'form', 'explode': True }})
    insert_data_option: Optional[SheetsSpreadsheetsValuesAppendInsertDataOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'insertDataOption', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    response_date_time_render_option: Optional[SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'responseDateTimeRenderOption', 'style': 'form', 'explode': True }})
    response_value_render_option: Optional[SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'responseValueRenderOption', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    value_input_option: Optional[SheetsSpreadsheetsValuesAppendValueInputOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'valueInputOption', 'style': 'form', 'explode': True }})
    

@dataclass
class SheetsSpreadsheetsValuesAppendSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesAppendSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesAppendSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesAppendSecurity:
    option1: Optional[SheetsSpreadsheetsValuesAppendSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SheetsSpreadsheetsValuesAppendSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SheetsSpreadsheetsValuesAppendSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SheetsSpreadsheetsValuesAppendRequest:
    path_params: SheetsSpreadsheetsValuesAppendPathParams = field()
    query_params: SheetsSpreadsheetsValuesAppendQueryParams = field()
    security: SheetsSpreadsheetsValuesAppendSecurity = field()
    request: Optional[shared.ValueRange] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SheetsSpreadsheetsValuesAppendResponse:
    content_type: str = field()
    status_code: int = field()
    append_values_response: Optional[shared.AppendValuesResponse] = field(default=None)
    
