from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SheetsSpreadsheetsValuesGetPathParams:
    range: str = field(metadata={'path_param': { 'field_name': 'range', 'style': 'simple', 'explode': False }})
    spreadsheet_id: str = field(metadata={'path_param': { 'field_name': 'spreadsheetId', 'style': 'simple', 'explode': False }})
    
class SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class SheetsSpreadsheetsValuesGetMajorDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"

class SheetsSpreadsheetsValuesGetValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"


@dataclass
class SheetsSpreadsheetsValuesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    date_time_render_option: Optional[SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dateTimeRenderOption', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    major_dimension: Optional[SheetsSpreadsheetsValuesGetMajorDimensionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'majorDimension', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    value_render_option: Optional[SheetsSpreadsheetsValuesGetValueRenderOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'valueRenderOption', 'style': 'form', 'explode': True }})
    

@dataclass
class SheetsSpreadsheetsValuesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SheetsSpreadsheetsValuesGetSecurity:
    option1: Optional[SheetsSpreadsheetsValuesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SheetsSpreadsheetsValuesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SheetsSpreadsheetsValuesGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[SheetsSpreadsheetsValuesGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[SheetsSpreadsheetsValuesGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SheetsSpreadsheetsValuesGetRequest:
    path_params: SheetsSpreadsheetsValuesGetPathParams = field()
    query_params: SheetsSpreadsheetsValuesGetQueryParams = field()
    security: SheetsSpreadsheetsValuesGetSecurity = field()
    

@dataclass
class SheetsSpreadsheetsValuesGetResponse:
    content_type: str = field()
    status_code: int = field()
    value_range: Optional[shared.ValueRange] = field(default=None)
    
