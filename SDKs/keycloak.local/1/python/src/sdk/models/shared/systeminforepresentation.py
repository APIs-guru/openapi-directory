from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SystemInfoRepresentation:
    file_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileEncoding' }})
    java_home: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaHome' }})
    java_runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaRuntime' }})
    java_vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaVendor' }})
    java_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaVersion' }})
    java_vm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaVm' }})
    java_vm_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaVmVersion' }})
    os_architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osArchitecture' }})
    os_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osName' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    server_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverTime' }})
    uptime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uptime' }})
    uptime_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uptimeMillis' }})
    user_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDir' }})
    user_locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLocale' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    user_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userTimezone' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
