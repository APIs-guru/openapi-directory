from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import androidattributes
from . import endpointverificationspecificattributes

class DeviceCompromisedStateEnum(str, Enum):
    COMPROMISED_STATE_UNSPECIFIED = "COMPROMISED_STATE_UNSPECIFIED"
    COMPROMISED = "COMPROMISED"
    UNCOMPROMISED = "UNCOMPROMISED"

class DeviceDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    GOOGLE_SYNC = "GOOGLE_SYNC"
    WINDOWS = "WINDOWS"
    MAC_OS = "MAC_OS"
    LINUX = "LINUX"
    CHROME_OS = "CHROME_OS"

class DeviceEncryptionStateEnum(str, Enum):
    ENCRYPTION_STATE_UNSPECIFIED = "ENCRYPTION_STATE_UNSPECIFIED"
    UNSUPPORTED_BY_DEVICE = "UNSUPPORTED_BY_DEVICE"
    ENCRYPTED = "ENCRYPTED"
    NOT_ENCRYPTED = "NOT_ENCRYPTED"

class DeviceManagementStateEnum(str, Enum):
    MANAGEMENT_STATE_UNSPECIFIED = "MANAGEMENT_STATE_UNSPECIFIED"
    APPROVED = "APPROVED"
    BLOCKED = "BLOCKED"
    PENDING = "PENDING"
    UNPROVISIONED = "UNPROVISIONED"
    WIPING = "WIPING"
    WIPED = "WIPED"

class DeviceOwnerTypeEnum(str, Enum):
    DEVICE_OWNERSHIP_UNSPECIFIED = "DEVICE_OWNERSHIP_UNSPECIFIED"
    COMPANY = "COMPANY"
    BYOD = "BYOD"


@dataclass_json
@dataclass
class Device:
    android_specific_attributes: Optional[androidattributes.AndroidAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidSpecificAttributes' }})
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTag' }})
    baseband_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basebandVersion' }})
    bootloader_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootloaderVersion' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    build_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildNumber' }})
    compromised_state: Optional[DeviceCompromisedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compromisedState' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_type: Optional[DeviceDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    enabled_developer_options: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledDeveloperOptions' }})
    enabled_usb_debugging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledUsbDebugging' }})
    encryption_state: Optional[DeviceEncryptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionState' }})
    endpoint_verification_specific_attributes: Optional[endpointverificationspecificattributes.EndpointVerificationSpecificAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointVerificationSpecificAttributes' }})
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imei' }})
    kernel_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernelVersion' }})
    last_sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSyncTime' }})
    management_state: Optional[DeviceManagementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementState' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meid' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkOperator' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    other_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherAccounts' }})
    owner_type: Optional[DeviceOwnerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerType' }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseVersion' }})
    security_patch_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPatchTime' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    wifi_mac_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMacAddresses' }})
    
