from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    free_wifi: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeWifi' }})
    free_wifi_exception: Optional[ConnectivityFreeWifiExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeWifiException' }})
    public_area_wifi_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAreaWifiAvailable' }})
    public_area_wifi_available_exception: Optional[ConnectivityPublicAreaWifiAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAreaWifiAvailableException' }})
    public_internet_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicInternetTerminal' }})
    public_internet_terminal_exception: Optional[ConnectivityPublicInternetTerminalExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicInternetTerminalException' }})
    wifi_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiAvailable' }})
    wifi_available_exception: Optional[ConnectivityWifiAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiAvailableException' }})
    
