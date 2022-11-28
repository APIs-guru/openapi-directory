import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeviceConfig } from "./sasportaldeviceconfig";
import { SasPortalChannelWithScore } from "./sasportalchannelwithscore";
import { SasPortalDeviceMetadata } from "./sasportaldevicemetadata";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
import { SasPortalDeviceGrant } from "./sasportaldevicegrant";
import { SasPortalDeviceMetadataInput } from "./sasportaldevicemetadata";
export declare enum SasPortalDeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Reserved = "RESERVED",
    Registered = "REGISTERED",
    Deregistered = "DEREGISTERED"
}
export declare class SasPortalDevice extends SpeakeasyBase {
    activeConfig?: SasPortalDeviceConfig;
    currentChannels?: SasPortalChannelWithScore[];
    deviceMetadata?: SasPortalDeviceMetadata;
    displayName?: string;
    fccId?: string;
    grantRangeAllowlists?: SasPortalFrequencyRange[];
    grants?: SasPortalDeviceGrant[];
    name?: string;
    preloadedConfig?: SasPortalDeviceConfig;
    serialNumber?: string;
    state?: SasPortalDeviceStateEnum;
}
export declare class SasPortalDeviceInput extends SpeakeasyBase {
    activeConfig?: SasPortalDeviceConfig;
    deviceMetadata?: SasPortalDeviceMetadataInput;
    displayName?: string;
    fccId?: string;
    grantRangeAllowlists?: SasPortalFrequencyRange[];
    grants?: SasPortalDeviceGrant[];
    name?: string;
    preloadedConfig?: SasPortalDeviceConfig;
    serialNumber?: string;
    state?: SasPortalDeviceStateEnum;
}
