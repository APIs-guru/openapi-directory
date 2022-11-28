from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConnectivityFreeWifiExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ConnectivityPublicAreaWifiAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ConnectivityPublicInternetTerminalExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ConnectivityWifiAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Connectivity:
    r"""Connectivity
    The ways in which the property provides guests with the ability to access the internet.
    """
    
    free_wifi: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeWifi') }})
    free_wifi_exception: Optional[ConnectivityFreeWifiExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeWifiException') }})
    public_area_wifi_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAreaWifiAvailable') }})
    public_area_wifi_available_exception: Optional[ConnectivityPublicAreaWifiAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAreaWifiAvailableException') }})
    public_internet_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicInternetTerminal') }})
    public_internet_terminal_exception: Optional[ConnectivityPublicInternetTerminalExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicInternetTerminalException') }})
    wifi_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiAvailable') }})
    wifi_available_exception: Optional[ConnectivityWifiAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiAvailableException') }})
    
